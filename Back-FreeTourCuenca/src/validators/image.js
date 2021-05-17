const joi = require("joi");

const schema = joi.object({
    route: joi.string().required()
});

function validate(body) {
    return schema.validate({
        route: body.route
    }, { abortEarly: false });
}

module.exports = {
    validate,
};