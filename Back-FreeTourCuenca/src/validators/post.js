const joi = require("joi");

const schema = joi.object({
    code: joi.string().default(Math.random().toString(36).slice(2)), //{ type: String, default: Math.random().toString(36).slice(2) },
    title: joi.string().required(), //String,
    text: joi.string().required(), //String,
    image: joi.string(), //Cambiar para que sea el id de una imagen
    language: joi.string().min(2).max(3).default("es"), //{ type: String, default: "es" },
    important: joi.boolean().default(false)
});

function validate(body) {
    return schema.validate({
        code: body.code,
        title: body.title,
        text: body.text,
        image: body.image,
        language: body.language,
        important: body.important
    }, { abortEarly: false });
}

module.exports = {
    validate,
};