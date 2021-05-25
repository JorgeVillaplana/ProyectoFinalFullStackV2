const joi = require("joi");
const langValidator = require("./language")

const schema = joi.object({
    namesByLang: joi.array().items(joi.object({
        name: joi.string().required(),
        language: langValidator.validate(data)
    })),
    icon: joi.string()
});

function validate(body) {
    return schema.validate({
        namesByLang: body.namesByLang,
        icon: body.icon
    }, { abortEarly: false });
}

module.exports = {
    validate,
};