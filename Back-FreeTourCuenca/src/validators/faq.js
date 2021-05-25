const joi = require("joi");
const langValidator = require("./language")

const schema = joi.object({
    details: joi.array().item(joi.object({
        questions: joi.string().required(),
        answer: joi.string().required()
    })),
    language: langValidator.validate(data)
})

function validate(body) {
    return schema.validate({
        details: body.details,
        language: body.language
    }, { abortEarly: false });
}

module.exports = {
    validate
};