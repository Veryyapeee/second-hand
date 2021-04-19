const Joi = require('joi-oid');

const validateRemoveGallery = (picPath: { picPath: string }) => {
    const schema = Joi.object({
        picPath: Joi.string().required()
    })

    return schema.validate(picPath);
}

export default validateRemoveGallery;