import { Response, Request } from 'express';
import { StatusCodes } from 'http-status-codes';

import _ from "lodash";
import "dotenv/config";
import bcrypt from "bcrypt";

import adminModel from '../../../models/admin.model';
import Admin from '../../../interfaces/admin.interface';

import validateUser from '../validation/validateUser';

const createNewUser = async (req: Request, res: Response) => {
    // Validate data
    const { error } = validateUser(req.body);
    if (error) return res.status(StatusCodes.BAD_REQUEST).send(error.details[0].message);

    // Check fi there is an user with this email
    const userMail: Admin | null = await adminModel.findOne({ email: req.body.email });
    if (userMail) return res.status(StatusCodes.BAD_REQUEST).send('User already has an account');

    // Check if there is an admin
    const admin: Admin | null = await adminModel.findOne({ isAdmin: true });
    if (admin) return res.status(StatusCodes.BAD_REQUEST).send("There can only be one admin!");
    // Check if confirm password is correct
    if (req.body.password !== req.body.confirmPassword) return res.status(StatusCodes.BAD_REQUEST).send(`Passwords don't match`);

    // Generate new user
    const newUser = new adminModel(req.body);
    // Create salt and hash the password
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);

    // Generate token
    const token = newUser.generateAuthToken();

    // Save new user
    await newUser.save();
    return res.header('x-auth-token', token).send(_.pick(newUser, ["id", "name", "email"]));
}

export default createNewUser;