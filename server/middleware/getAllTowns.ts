import { Request, Response, NextFunction } from "express";
import townModel from "../models/town.model";

const getAllTowns = async (req: Request, res: Response, next: NextFunction) => {
    const towns = await townModel.find({});
    res.locals.towns = towns;
    next();
};

export default getAllTowns;
