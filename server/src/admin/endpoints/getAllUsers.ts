import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import adminModel from '../../../models/admin.model';

const getAllUsers = async (req: Request, res: Response) => {
    const admin = await adminModel.find().select("-password");
    res.status(StatusCodes.OK).send(admin);
};

export default getAllUsers;
