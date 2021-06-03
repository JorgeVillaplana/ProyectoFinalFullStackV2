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


controller.send = async (req, res) => { // FUNCIÓN DE MAIL DE CONFIRMACIÓN PARA LOS USUARIOS
    try {
        const subject = "Confirmación de reserva"
        const destination = "maildelusuario"
        const data = await emailObj.render('userticket.pug')

        await mailer.send(subject, destination, data)
        res.status(204).send()
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "Error al enviar el email" })
    }
}


controller.sendPug = async (req, res) => { // FUNCIÓN DE MAIL DE CONFIRMACIÓN PARA JESÚS
    try {
        const name = "Pepito"
        const subject = `Nuevas reservas ${name}`
        const destination = "mail-de-name"
        const locals = { name: name }
        const data = await emailObj.render('adminticket.pug', locals)
        console.log(data)
        await mailer.send(subject, destination, data)

        res.send(data)

    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "Error al enviar el email" })
    }
}

module.exports = controller
