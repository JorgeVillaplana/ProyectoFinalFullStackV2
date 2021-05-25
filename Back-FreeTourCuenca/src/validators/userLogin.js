const joi = require("joi");

const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});

function validate(body) {
    return schema.validate({
        email: body.email,
        password: body.password,
    }, { abortEarly: false });
}

module.exports = {
    validate,
};