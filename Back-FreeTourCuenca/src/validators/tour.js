const joi = require("joi");
const specialValidator = require("./special")
const detailValidator = require("./tourdetail")

const schema = joi.object({
    name: joi.string().required(),
    duration: joi.number().required(),
    seats: joi.number().required(),
    tourDetails: joi.array().items(detailValidator.validate(data)),
    images: joi.array().items(joi.string()),
    map: joi.string(),
    specialFeatures: joi.array().items(joi.object({
        special: specialValidator.validate(data),
        value: joi.boolean().required()
    }))
});

function validate(body) {
    return schema.validate({
        name: body.code,
        duration: body.duration,
        seats: body.seats,
        image: body.image,
        map: body.map,
        specialFeatures: body.specialFeatures
    }, { abortEarly: false });
}

module.exports = {
    validate,
};