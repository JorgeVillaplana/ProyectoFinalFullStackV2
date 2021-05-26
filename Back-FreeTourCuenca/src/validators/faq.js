const joi = require("joi");
const langValidator = require("./language")

const schema = joi.object({
    details: joi.array().items(joi.object({
        questions: joi.string().required(),
        answer: joi.string().required()
    })),
    language: joi.object().required()
})

function validate(body) {
    return schema.validate({
        details: body.details,
        language: langValidator.validate(body.language)
    }, { abortEarly: false });
}

module.exports = {
    validate
};