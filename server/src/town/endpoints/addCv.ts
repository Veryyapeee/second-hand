import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import townModel from '../../../models/town.model';
import Town, { CV } from '../../../interfaces/town.interface';

import validateNewCv from '../validation/validateNewCv';

const addCv = async (req: Request, res: Response) => {
    // Validate file extension
    if (req.file.mimetype !== 'image/jpeg' && req.file.mimetype !== 'application/pdf' && req.file.mimetype !== 'image/png' && req.file.mimetype !== 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') return res.status(StatusCodes.BAD_REQUEST).send('Wrong file format');

    // Get town object
    const town: Town = res.locals.town;
    console.log(req.file);
    // Check if user already send the CV
    for await (let cv of town.cv!) {
        if (cv.email === req.body.email) return res.status(StatusCodes.BAD_REQUEST).send('User already send CV');
    }

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
    if (town.cv) {
        town.cv.push(addedCv);
    }

    // Update town
    const updatedTown = await townModel.findByIdAndUpdate(
        req.params.townId,
        { ...town },
        { new: true }
    )

    // Save data
    if (updatedTown) {
        await updatedTown.save();
        return res.status(StatusCodes.OK).send(updatedTown);
    } else {
        return res.status(StatusCodes.NOT_FOUND).send('Town not found');
    }
}

export default addCv;