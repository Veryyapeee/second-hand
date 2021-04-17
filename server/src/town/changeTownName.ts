import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import townModel from '../../models/town.model';
import Town, { Name } from '../../interfaces/town.interface';

import validateTownName from './validateTownName';

const changeTownName = async (req: Request, res: Response) => {

    const changedName: Name = {
        ...req.body,
    }

    const { error } = validateTownName(changedName);

    if (error) res.status(StatusCodes.BAD_REQUEST).send(error.details[0].message);

    //Create new town object
    const town = await townModel.findByIdAndUpdate(
        req.params.townId,
        { ...req.body },
        { new: true }
    );

    return res.status(StatusCodes.OK).send(town);
}

export default changeTownName;