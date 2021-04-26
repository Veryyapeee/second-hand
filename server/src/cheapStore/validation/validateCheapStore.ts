const Joi = require('joi-oid');

import CheapStore from '../../../interfaces/cheapStore.interface';

const validateCheapStore = (cheapStoreData: CheapStore) => {
    const schema = Joi.object({
        storeId: Joi.objectId().required(),
        description: Joi.string().min(3).max(255).required(),
        openHours: Joi.object({
            monday: Joi.string().min(3).max(24).required(),
            tuesday: Joi.string().min(3).max(24).required(),
            wednesday: Joi.string().min(3).max(24).required(),
            thursday: Joi.string().min(3).max(24).required(),
            friday: Joi.string().min(3).max(24).required(),
            saturday: Joi.string().min(3).max(24).required(),
            sunday: Joi.string().min(3).max(24).required(),
        }),
        price: Joi.object({
            shoes: Joi.number().required(),
            shirt: Joi.number().required(),
            socks: Joi.number().required(),
        })
    })

    return schema.validate(cheapStoreData);
}

export default validateCheapStore;