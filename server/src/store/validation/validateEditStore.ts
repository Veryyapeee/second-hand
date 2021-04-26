const Joi = require('joi-oid');

import Store from '../../../interfaces/store.interface';

const validateEditStore = (storeData: Store) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(30),
        description: Joi.string().min(3).max(255),
        address: Joi.object({
            town: Joi.string().min(3).max(30),
            street: Joi.string().min(3).max(50)
        }),
        contact: Joi.string().min(5).max(24),
        openHours: Joi.object({
            monday: Joi.string().min(3).max(24),
            tuesday: Joi.string().min(3).max(24),
            wednesday: Joi.string().min(3).max(24),
            thursday: Joi.string().min(3).max(24),
            friday: Joi.string().min(3).max(24),
            saturday: Joi.string().min(3).max(24),
            sunday: Joi.string().min(3).max(24),
        }),
        suppDay: Joi.string().min(3).max(24),
        price: Joi.object({
            monday: Joi.number(),
            tuesday: Joi.number(),
            wednesday: Joi.number(),
            thursday: Joi.number(),
            friday: Joi.number(),
            saturday: Joi.number(),
            sunday: Joi.number(),
        }),
    })

    return schema.validate(storeData);
}

export default validateEditStore;