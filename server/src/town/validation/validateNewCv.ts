const Joi = require('joi-oid');
import { CV } from '../../../interfaces/town.interface';

const validateNewCv = (cvData: CV) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(24).required(),
        lastName: Joi.string().min(3).max(24).required(),
        email: Joi.string().min(5).max(50).required(),
        cv: Joi.string().min(3).max(255).required()
    })

    return schema.validate(cvData);
}

export default validateNewCv;