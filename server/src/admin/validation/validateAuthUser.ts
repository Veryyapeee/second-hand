const Joi = require('joi-oid');

import { AdminLogin } from '../../../interfaces/admin.interface';

const validateAuthUser = (req: AdminLogin) => {
    const schema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: true } }).min(5).max(50),
        password: Joi.string().min(8).max(255).required(),
    });

    return schema.validate(req);
}

export default validateAuthUser;
