const joi = require("joi");

const schema = joi.object({
    code: joi.string().min(2).max(3).lowercase().required(),
    name: joi.string().required(),
    svg: joi.string()
});

function validate(body) {
    return schema.validate({
        name: body.name,
        surname: body.surname,
        dni: body.dni,
        phone: body.phone,
        email: body.email
    }, { abortEarly: false });
}

module.exports = {
    validate,
};