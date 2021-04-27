const Joi = require('joi-oid');

import MainPage from '../../../interfaces/mainPage.interface';

const validateMainPage = (mainPageData: MainPage) => {
    const schema = Joi.object({
        description: Joi.string().min(3).max(255).required(),
        covidInfo: Joi.object({
            enabled: Joi.boolean(),
            content: Joi.string().min(3).max(255)
        }),
        news: Joi.array().items({
            title: Joi.string().min(3).max(24),
            content: Joi.string().min(3).max(255),
            photo: Joi.string(),
            date: Joi.date(),
        }),
    })

    return schema.validate(mainPageData);
}

export default validateMainPage;