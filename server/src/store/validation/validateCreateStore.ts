const Joi = require('joi-oid');

import Store from '../../../interfaces/store.interface';

const validateStore = (storeData: Store) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        description: Joi.string().min(3).max(255).required(),
        address: Joi.object({
            town: Joi.string().min(3).max(30).required(),
            street: Joi.string().min(3).max(50).required()
        }),
        contact: Joi.string().min(5).max(24).required(),
        openHours: Joi.object({
            monday: Joi.string().min(3).max(24).required(),
            tuesday: Joi.string().min(3).max(24).required(),
            wednesday: Joi.string().min(3).max(24).required(),
            thursday: Joi.string().min(3).max(24).required(),
            friday: Joi.string().min(3).max(24).required(),
            saturday: Joi.string().min(3).max(24).required(),
            sunday: Joi.string().min(3).max(24).required(),
        }),
        suppDay: Joi.string().min(3).max(24).required(),
        price: Joi.object({
            monday: Joi.number().required(),
            tuesday: Joi.number().required(),
            wednesday: Joi.number().required(),
            thursday: Joi.number().required(),
            friday: Joi.number().required(),
            saturday: Joi.number().required(),
            sunday: Joi.number().required(),
        }),
    })

    return schema.validate(storeData);
}

export default validateStore;