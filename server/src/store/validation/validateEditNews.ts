const Joi = require('joi-oid');

const validateEditNews = (data: any) => {
    const schema = Joi.object({
        id: Joi.objectId().required(),
        title: Joi.string().min(3).max(24).required(),
        content: Joi.string().min(3).max(255).required()
    })

    return schema.validate(data);
}

export default validateEditNews;