const joi = require("joi");

const schema = joi.object({
    code: joi.string().required(),
    questions: joi.string().required(),
    answer: joi.string().required(),
    language: joi.string()
})

function validate(body) {
    return schema.validate({
        code: body.code,
        text: body.text,
        language: body.language
    }, { abortEarly: false });
}

module.exports = {
    validate
};