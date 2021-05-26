const controller = {}
const Guide = require('../models/guide')
const validator = require('../validators/guide')

controller.saveGuide = async(req, res) => {
    const valid = validator.validate(req.body)

    if (!valid) {
        res.status(400).send()
    }

    try {
        console.log(req.body)
        const guide = new Guide({
            name: req.body.name,
            surname: req.body.surname,
            dni: req.body.dni,
            phone: req.body.phone,
            email: req.body.email,
            languages: req.body.languages,
            locations: req.body.locations
        })
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
        console.log(id)
        const guide = await Guide.findById(id)
        res.json(guide)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

controller.updateGuide = async(req, res) => {
    const valid = validator.validate(req.body)


    if (!valid) {
        res.status(400).send()
    }

    try {
        await Guide.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            surname: req.body.surname,
            dni: req.body.dni,
            phone: req.body.phone,
            mail: req.body.email,
            languages: req.body.languages,
            locations: req.body.locations,
            updatedAt: Date.now()
        })
        res.status(204).send("Actualizado con éxito")
    } catch (err) {
        res.status(500).send(err)
    }
}

controller.deleteGuide = async(req, res) => {
    const id = req.params.id

    if (!id) {
        res.status(400).send()
    }

    try {
        await Guide.findByIdAndDelete(id)
        res.status(204).send("Borrado con éxito")
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

module.exports = controller