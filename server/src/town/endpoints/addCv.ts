import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { CV } from '../../../interfaces/town.interface';

import validateNewCv from '../validation/validateNewCv';

const addCv = async (req: Request, res: Response) => {
    // Check if file was provided
    if (!req.file) return res.status(StatusCodes.BAD_REQUEST).send('No data provided');
    // Get town object
    const town = res.locals.town;

    // Create CV object
    const addedCv: CV = {
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        cv: req.file.path,
    }

    // Validate CV data
    const { error } = validateNewCv(addedCv);

    if (error) return res.status(StatusCodes.BAD_REQUEST).send(error.details[0].message);

    // Push CV to town object
    town.cv.push(addedCv);

    //Save data
    await town.save();
    return res.status(StatusCodes.OK).send(town);
}

export default addCv;