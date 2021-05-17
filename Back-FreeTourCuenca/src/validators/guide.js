const joi = require("joi");

const schema = joi.object({
    name: joi.string().required(),
    surname: joi.string().required(),
    dni: joi.string().max(9).required(),
    phone: joi.string().max(12).required(),
    email: joi.string().email()
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