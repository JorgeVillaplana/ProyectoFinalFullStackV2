const joi = require("joi");
const langValidator = require("./language")

const schema = joi.object({
    details: joi.array().items(joi.object({
        title: joi.string().required(),
        text: joi.string().required(),
        language: langValidator.validate(data),
        categories: joi.array().items(joi.string())
    })),
    image: joi.string(),
    important: joi.boolean()
});

function validate(body) {
    return schema.validate({
        details: body.details,
        image: body.image,
        important: body.important
    }, { abortEarly: false });
}

module.exports = {
    validate,
};