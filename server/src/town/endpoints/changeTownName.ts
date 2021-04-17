import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import townModel from '../../../models/town.model';
import { Name } from '../../../interfaces/town.interface';

import validateTownName from '../validation/validateTownName';

const changeTownName = async (req: Request, res: Response) => {

    const changedName: Name = {
        ...req.body,
    }

    // Validate data
    const { error } = validateTownName(changedName);

    if (error) res.status(StatusCodes.BAD_REQUEST).send(error.details[0].message);

    //Check if name is already taken
    const towns = res.locals.towns;
    for await (let town of towns) {
        if (town.name === req.body.name) return res.status(StatusCodes.BAD_REQUEST).send('Town already exists');
    }

    // Create new town object
    const town = await townModel.findByIdAndUpdate(
        req.params.townId,
        { ...req.body },
        { new: true }
    );

    return res.status(StatusCodes.OK).send(town);
}

export default changeTownName;