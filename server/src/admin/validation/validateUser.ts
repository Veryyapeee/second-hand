const Joi = require('joi-oid');
import JoiPasswordComplexity from 'joi-password';

import Admin from '../../../interfaces/admin.interface';

const validateUser = (userData: Admin) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(24).required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: true } }).min(5).max(50),
        password: JoiPasswordComplexity.string().minOfSpecialCharacters(1).minOfUppercase(1).minOfNumeric(1).required(),
        confirmPassword: Joi.string().min(8).max(255).required(),
        isAdmin: Joi.boolean()
    })

    return schema.validate(userData);
}

export default validateUser;