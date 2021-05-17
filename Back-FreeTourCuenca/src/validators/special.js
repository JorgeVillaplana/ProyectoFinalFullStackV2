const joi = require("joi");

const schema = joi.object({
    name: joi.string().required(), //String,
    icon: joi.string() //String,
});

function validate(body) {
    return schema.validate({
        name: body.name,
        icon: body.icon
    }, { abortEarly: false });
}

module.exports = {
    validate,
};