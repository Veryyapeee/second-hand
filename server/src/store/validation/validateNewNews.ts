const Joi = require('joi-oid');

import { News } from '../../../interfaces/store.interface';

const validateNews = (news: News) => {
    const schema = Joi.object({
        title: Joi.string().min(3).max(24).required(),
        content: Joi.string().min(3).max(255).required(),
        photo: Joi.object({
            path: Joi.string().required()
        })
    })

    return schema.validate(news);
}

export default validateNews;