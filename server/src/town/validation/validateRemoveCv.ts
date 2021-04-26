const Joi = require('joi-oid');

const validateRemoveCv = (id: { id: string }) => {
    const schema = Joi.object({
        id: Joi.objectId().required()
    })

    return schema.validate(id);
}

export default validateRemoveCv;