const Joi = require('joi-oid');
import Town from '../../../interfaces/town.interface';

const validateTown = (townData: Town) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(255).required(),
        recruiting: Joi.boolean().required(),
    })

    return schema.validate(townData);
}

export default validateTown;