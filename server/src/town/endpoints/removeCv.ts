import fs from 'fs';
import util from 'util';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { CV } from '../../../interfaces/town.interface';

import validateRemoveCv from '../validation/validateRemoveCv';

const unlink: (path: any) => any = util.promisify(fs.unlink);

const removeCv = async (req: Request, res: Response) => {
    // Get town object
    const town = res.locals.town;

    // Validate body
    const { error } = validateRemoveCv(req.body);
    if (error) return res.status(StatusCodes.BAD_REQUEST).send(error.details[0].message);

    // Remove CV from array and from storage
    town.cv?.forEach(async (cv: CV, index: number) => {
        if (cv._id!.toString() === req.body.id.toString()) {
            town.cv?.splice(index, 1);
            await unlink(cv.cv);
        }
    });

    // Save new data
    await town.save();
    return res.status(StatusCodes.OK).send(town);
}

export default removeCv;