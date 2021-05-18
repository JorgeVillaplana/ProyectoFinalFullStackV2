const joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const complexityOptions = {
    min: 4,
    max: 24,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 0,
};

const schema = joi.object({
    name: joi.string().required(),
    role: joi.string().valid(...["admin", "manipulator", "creator", "blogger", "translator"]).required(),
    email: joi.string().email().required(),
    password: passwordComplexity(complexityOptions),
});

function validate(body) {
    return schema.validate({
        name: body.name,
        role: body.role,
        email: body.email,
        password: body.password,
    }, { abortEarly: false });
}

module.exports = {
    validate,
};