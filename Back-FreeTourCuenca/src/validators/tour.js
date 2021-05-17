const joi = require("joi");

const schema = joi.object({
    code: joi.string().default(Math.random().toString(36).slice(2)),
    title: joi.string().required(),
    description: joi.string().required(),
    duration: joi.number().required(), //Cambiar para que sea una cantidad de tiempo
    seats: joi.number().required(),
    image: joi.string().required(), //Cambiar para que sea el id de una imagen
    guide: joi.string().required(), //Cambiar para que sea el id de un guía
    map: joi.string(),
    language: joi.string().min(2).max(3).required()
});

function validate(body) {
    return schema.validate({
        code: body.code,
        title: body.title,
        description: body.description,
        timeInit: body.timeInit,
        duration: body.duration,
        seats: body.seats,
        image: body.image,
        guide: body.guide,
        map: body.map,
        language: body.language
    }, { abortEarly: false });
}

module.exports = {
    validate,
};