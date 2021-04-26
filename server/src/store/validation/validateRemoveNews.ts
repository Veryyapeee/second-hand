const Joi = require('joi-oid');

const validateRemoveNews = (newsId: { id: string }) => {
    const schema = Joi.object({
        id: Joi.objectId().required()
    })

    return schema.validate(newsId);
}

export default validateRemoveNews;