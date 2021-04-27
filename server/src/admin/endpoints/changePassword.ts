import { Response, Request } from 'express';
import { StatusCodes } from 'http-status-codes';

import _ from "lodash";
import bcrypt from "bcrypt";

import adminModel from '../../../models/admin.model';
import validatePassword from '../validation/validatePassword';

const changePassword = async (req: Request, res: Response) => {
    // Validate password
    const { error } = validatePassword(req.body);
    if (error) return res.status(StatusCodes.BAD_REQUEST).send(error.details[0].message);

    // Get admin
    const admin = await adminModel.findById(req.adminInfo._id);
    if (!admin) return res.status(StatusCodes.BAD_REQUEST).send(`User doesn't exists`);

    // Check if passwords match 
    if (req.body.password !== req.body.confirmPassword) return res.status(StatusCodes.BAD_REQUEST).send('New password and confirm password must match')

    // Check if old password is correct
    const validPassword = await bcrypt.compare(req.body.oldPassword, admin.password);
    if (!validPassword) return res.status(StatusCodes.BAD_REQUEST).send('Invalid password');

    // Create new hash password
    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(req.body.password, salt);

    // Save new password
    const newAdmin = await adminModel.findByIdAndUpdate(
        req.adminInfo._id,
        { password: newPassword },
        { new: true }
    );
    return res.status(StatusCodes.OK).send(_.pick(newAdmin, ["_id", "name", "email"]));
}

export default changePassword;