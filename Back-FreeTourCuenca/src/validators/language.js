const joi = require("joi");

const schema = joi.object({
    code: joi.string().min(2).max(3).lowercase().required(),
    name: joi.string().required(),
    icon: joi.string()
});

function validate(body) {
    return schema.validate({
        code: body.code,
        name: body.name,
        icon: body.icon
    }, { abortEarly: false });
}

module.exports = {
    validate,
};