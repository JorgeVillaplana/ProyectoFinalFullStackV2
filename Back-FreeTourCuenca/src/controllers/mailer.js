const controller = {}
const mailer = require("../helpers/mailer")
const Email = require('email-templates')
const path = require('path')
const appDir = path.join(__dirname, '../templates/')
const emailObj = new Email({
    views: {
        root: appDir
    }
})


controller.sendConfirm = async(req, res) => { // MAIL DE CONFIRMACIÓN PARA LOS USUARIOS
    try {
        const subject = "Confirmación de reserva con Explora Toledo"
        const destination = req.body.email
        const locals = {
            name: req.body.name,
            date: req.body.date,
            hour: req.body.hour,
            quantity: req.body.quantity,
        }
        const data = await emailObj.render('userticket.pug', locals)

        await mailer.send(subject, destination, data)
        res.status(204).send()
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "Error al enviar el email" })
    }
}


controller.sendMe = async(req, res) => { // MAIL DE CONFIRMACIÓN PARA CLIENTE
    try {
        const subject = `Nuevas reservas`
        const destination = "jorge.villaplana.m@gmail.com"
        const locals = {
            name: req.body.name,
            date: req.body.date,
            hour: req.body.hour,
            quantity: req.body.quantity,
            tour: req.body.tour,
        }
        const data = await emailObj.render('adminticket.pug', locals)
        console.log(data)
        await mailer.send(subject, destination, data)

        res.send(data)

    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "Error al enviar el email" })
    }
}

controller.sendContact = async(req, res) => { // MAIL PARA MENSAJES DEL FORMULARIO DE CONTACCTO
    try {
        const subject = "Nuevo mensaje de Contacto"
        const destination = "jorge.villaplana.m@gmail.com"
        const locals = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            message: req.body.message,
        }
        const data = await emailObj.render('contact.pug', locals)

        await mailer.send(subject, destination, data)
        res.status(204).send()
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "Error al enviar el email" })
    }
}

module.exports = controller