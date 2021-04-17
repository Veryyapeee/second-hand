import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import townModel from '../../../models/town.model';
import Town from '../../../interfaces/town.interface';

import validateTown from '../validation/validateNewTown';

const createNewTown = async (req: Request, res: Response) => {

    // Create town object
    const townData: Town = {
        ...req.body,
    };

    // Validate data
    const { error } = validateTown(townData);

    if (error) return res.status(StatusCodes.BAD_REQUEST).send(error.details[0].message);

    //Check if town with this name exist
    const towns = res.locals.towns;
    for await (let town of towns) {
        if (town.name === req.body.name) return res.status(StatusCodes.BAD_REQUEST).send('Town already exists');
    }

    // Create new town
    const newTown = new townModel(townData);
    await newTown.save();
    return res.status(StatusCodes.OK).send(newTown);
}

export default createNewTown;