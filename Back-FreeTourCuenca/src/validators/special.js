const joi = require("joi");
const langValidator = require("./language")

const schema = joi.object({
    namesByLang: joi.array().items(joi.object({
        name: joi.string().required(),
        language: joi.string().required()
    })),
    icon: joi.string()
});

function validate(body) {
    return schema.validate({
        namesByLang: {
            name: body.namesByLang.name,
            language: body.namesByLang.language
        },
        icon: body.icon
    }, { abortEarly: false });
}

module.exports = {
    validate,
};