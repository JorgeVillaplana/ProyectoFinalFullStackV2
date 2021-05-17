const joi = require("joi");

const schema = joi.object({
    code: joi.string().required(), //String,
    text: joi.string().required(), //String,
    language: joi.string().min(2).max(3).required() //String,
});

function validate(body) {
    return schema.validate({
        code: body.code,
        text: body.text,
        language: body.language
    }, { abortEarly: false });
}

module.exports = {
    validate,
};