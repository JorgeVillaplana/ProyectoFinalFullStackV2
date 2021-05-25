const joi = require("joi");

const schema = joi.object({
    detail: joi.string(),
    route: joi.string().required()
});

function validate(body) {
    return schema.validate({
        detail: body.detail,
        route: body.route
    }, { abortEarly: false });
}

module.exports = {
    validate,
};