const controller = {}
const Language = require('../models/language')
const validator = require('../validators/language')

controller.saveLanguage = async(req, res) => {
    const valid = validator.validate(req.body)


    if (!valid) {
        res.status(400).send()
    }

    try {
        const language = new Language({
            code: req.body.code,
            name: req.body.name,
            icon: req.body.icon
        })
        language.save()
        res.send()
    } catch (error) {
        res.status(500).send("Error")
    }
}

controller.getLanguages = async(req, res) => {
    try {
        const languages = await Language.find()
        res.json(languages)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

controller.getLanguage = async(req, res) => {
    const id = req.params.id

    try {
        const language = await Language.findById(id)
        res.json(language)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }

}

controller.updateLanguage = async(req, res) => {
    const valid = validator.validate(req.body)


    if (!valid) {
        res.status(400).send()
    }

    try {
        await Language.findByIdAndUpdate(req.params.id, {
            code: req.body.code,
            name: req.body.name,
            icon: req.body.icon,
            updatedAt: Date.now()
        })
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err)
    }
}

controller.deleteLanguage = async(req, res) => {
    const id = req.params.id

    if (!id) {
        res.status(400).send()
    }

    try {
        await Language.findByIdAndDelete(id)
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

module.exports = controller