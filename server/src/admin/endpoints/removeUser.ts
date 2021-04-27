import { Response, Request } from 'express';
import { StatusCodes } from 'http-status-codes';

import _ from "lodash";

import adminModel from '../../../models/admin.model';

const removeUser = async (req: Request, res: Response) => {
    // Check if id was provided
    if (!req.params.userId) return res.status(StatusCodes.BAD_REQUEST).send('Something went wrong');

    // Check if user exists
    const user = await adminModel.findById(req.params.userId);

    if (!user) return res.status(StatusCodes.BAD_REQUEST).send(`User doesn't exists`);

    // Check if valid remove request
    if (user.isAdmin) return res.status(StatusCodes.BAD_REQUEST).send(`You can't remove admin`);
    if (user._id.toString() === req.params.userId.toString()) return res.status(StatusCodes.BAD_REQUEST).send(`You can't remove yourself`);

    // Remove user
    const removedUser = await adminModel.findByIdAndDelete(req.params.userId);
    return res.status(StatusCodes.OK).send(_.pick(removedUser, ["id", "name", "email"]));
}

export default removeUser;