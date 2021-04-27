import Joi from "joi";
import JoiPasswordComplexity from 'joi-password';

import { AdminPassword } from '../../../interfaces/admin.interface';

const validatePassword = (user: AdminPassword) => {
    const schema = Joi.object({
        oldPassword: Joi.string().min(8).max(255).required(),
        password: JoiPasswordComplexity.string().minOfSpecialCharacters(1).minOfUppercase(1).minOfNumeric(1).required(),
        confirmPassword: Joi.string().min(8).max(255).required(),
    });

    return schema.validate(user);
}

export default validatePassword;