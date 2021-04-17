import { Request, Response, NextFunction } from "express";
import { StatusCodes } from 'http-status-codes';

import townModel from "../models/town.model";

const getSingleTown = async (req: Request, res: Response, next: NextFunction) => {
    const town = await townModel.findById(req.params.townId);
    if (!town) return res.status(StatusCodes.NOT_FOUND).send('Town not found');
    res.locals.town = town;
    next();
};

export default getSingleTown;
