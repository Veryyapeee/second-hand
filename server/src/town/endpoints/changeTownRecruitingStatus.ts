import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import townModel from '../../../models/town.model';
import { Status } from '../../../interfaces/town.interface';

import validateTownStatus from '../validation/validateTownStatus';

const changeRecruitingStatus = async (req: Request, res: Response) => {
    // Create object
    const changedStatus: Status = {
        ...req.body,
    }

    // Validate data
    const { error } = validateTownStatus(changedStatus);

    if (error) res.status(StatusCodes.BAD_REQUEST).send(error.details[0].message);

    //Create new town object
    const town = await townModel.findByIdAndUpdate(
        req.params.townId,
        { ...req.body },
        { new: true }
    );

    return res.status(StatusCodes.OK).send(town);
}

export default changeRecruitingStatus;