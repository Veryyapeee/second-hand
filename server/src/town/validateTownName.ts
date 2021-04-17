const Joi = require('joi-oid');

import { Name } from '../../interfaces/town.interface';

const validateTownName = (name: Name) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(255).required(),
    })

    return schema.validate(name);
}

export default validateTownName;