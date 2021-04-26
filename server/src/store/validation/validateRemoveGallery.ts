const Joi = require('joi-oid');

const validateRemoveGallery = (pic: { id: string }) => {
    const schema = Joi.object({
        id: Joi.objectId().required()
    })

    return schema.validate(pic);
}

export default validateRemoveGallery;