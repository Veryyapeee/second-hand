import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import adminModel from '../../../models/admin.model';

const getUserMe = async (req: Request, res: Response) => {
    const admin = await adminModel.findById(req.adminInfo._id).select("-password");
    res.status(StatusCodes.OK).send(admin);
};

export default getUserMe;
