const joi = require("joi");
const specialValidator = require("./special")
const detailValidator = require("./tourdetail")

const schema = joi.object({
    name: joi.string().required(),
    duration: joi.number().required(),
    seats: joi.number().required(),
    tourDetails: joi.array().items(detailValidator.validate(item)),
    images: joi.array().items(joi.string()),
    map: joi.string(),
    specialFeatures: joi.array().items(joi.object({
        special: joi.object(),
        value: joi.boolean().required()
    }))
});

function validate(body) {
    return schema.validate({
        name: body.code,
        duration: body.duration,
        seats: body.seats,
        tourDetails: body.tourDetails,
        image: body.image,
        map: body.map,
        specialFeatures: {
            special: specialValidator.validate(body.specialFeatures.special),
            value: body.specialFeatures.value
        }
    }, { abortEarly: false });
}

module.exports = {
    validate,
};