const joi = require("joi");
const langValidator = require("./language")

const schema = joi.object({
    details: joi.array().items(joi.object({
        title: joi.string().required(),
        text: joi.string().required(),
        language: joi.object(),
        categories: joi.array().items(joi.string())
    })),
    image: joi.string(),
    important: joi.boolean()
});

function validate(body) {
    return schema.validate({
        details: [{
            title: body.details.title,
            text: body.details.text,
            language: langValidator.validate(body.details.language),
            categories: body.details.categories
        }],
        image: body.image,
        important: body.important
    }, { abortEarly: false });
}

module.exports = {
    validate,
};