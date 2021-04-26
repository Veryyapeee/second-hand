const Joi = require('joi-oid');

import { Status } from '../../../interfaces/town.interface';

const validateTownStatus = (status: Status) => {
    const schema = Joi.object({
        recruiting: Joi.boolean().required()
    })

    return schema.validate(status);
}

export default validateTownStatus;