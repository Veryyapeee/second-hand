import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

import townModel from "../models/town.model";
import Town from '../interfaces/town.interface';

const getAllTowns = async (req: Request, res: Response, next: NextFunction) => {
    const towns: Town[] | null = await townModel.find({});
    if (!towns) return res.status(StatusCodes.NOT_FOUND).send('Not found');
    res.locals.towns = towns;
    next();
};

export default getAllTowns;
