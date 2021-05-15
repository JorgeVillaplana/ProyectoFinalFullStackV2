const controller = {}
const Guide = require('../models/guide')

controller.saveGuide = async(req, res) => {
    const name = req.body.name
    const surname = req.body.name
    const dni = req.body.dni
    const phone = req.body.phone
    const email = req.body.email


    if (!name || !surname || !dni || !phone || !email) {
        res.status(400).send()
    }

    try {
        const guide = new Guide({ name: name, surname: surname, dni: dni, phone: phone, email: email })
        guide.save()
        res.send()
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

controller.getGuides = async(req, res) => {
    try {
        const guides = await Guide.find()
        res.json(guides)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

controller.getGuide = async(req, res) => {
    const id = req.params.id

    try {
        const guide = await Guide.findById(id)
        res.json(guide)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

controller.updateImage = async(req, res) => {
    const name = req.body.name
    const surname = req.body.name
    const dni = req.body.dni
    const phone = req.body.phone
    const email = req.body.email


    if (!name || !surname || !dni || !phone || !email) {
        res.status(400).send()
    }

    try {
        await Image.findByIdAndUpdate(req.params.id, { name: name, surname: surname, dni: dni, email: email, phone: phone, updatedAt: Date.now() })
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err)
    }
}

controller.deleteImage = async(req, res) => {
    const id = req.params.id

    if (!id) {
        res.status(400).send()
    }

    try {
        await Image.findByIdAndDelete(id)
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

module.exports = controller