const joi = require("joi");
const guideValidator = require("./guide")
const langValidator = require("./language")

const schema = joi.object({
    language: joi.object(),
    title: joi.string(),
    categories: joi.array().items(joi.string()),
    description: joi.string(),
    guides: joi.array().items(guideValidator.validate(item)),
    tourdates: joi.array().items(joi.object({
        day: joi.date().min('now'),
        timePicker: joi.array().items(joi.object({
            hour: joi.string(),
            remainingSeats: joi.number()
        }))
    }))
});

function validate(body) {
    return schema.validate({
        language: langValidator.validate(body.language),
        title: body.title,
        categories: body.categories,
        description: body.description,
        guides: body.guides,
        tourdates: body.tourdates
    }, { abortEarly: false });
}

module.exports = {
    validate,
};