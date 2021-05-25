const joi = require("joi");
const langValidator = require("./language")

const schema = joi.object({
    texts: joi.array().items(joi.object({
        code: joi.string().required(),
        text: joi.string().required()
    })),
    language: langValidator.validate(data).required()
});

function validate(body) {
    return schema.validate({
        texts: body.texts,
        language: body.language
    }, { abortEarly: false });
}

module.exports = {
    validate,
};