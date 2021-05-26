const controller = {}
const Special = require('../models/special')
const validator = require('../validators/special')

controller.saveSpecial = async(req, res) => {
    const valid = validator.validate(req.body)

    if (!valid) {
        res.status(400).send()
    }

    try {
        let namesByLang = []
        req.body.namesByLang.foreach(
            element => {
                const item = {
                    name: element.name,
                    language: element.language
                }
                namesByLang.push(item)
            }
        )

        const special = new Special({ namesByLang: namesByLang, icon: req.body.icon })
        special.save()
        res.send()
    } catch (error) {
        res.status(500).send("Error")
    }
}

controller.getSpecials = async(req, res) => {
    try {
        const specials = await Special.find()
        res.json(specials)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

controller.getSpecial = async(req, res) => {
    const id = req.params.id

    try {
        const special = await Special.findById(id)
        res.json(special)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }

}

controller.updateSpecial = async(req, res) => {
    const valid = validator.validate(req.body)


    if (!valid) {
        res.status(400).send()
    }

    try {
        let namesByLang = []
        req.body.namesByLang.foreach(
            element => {
                const item = {
                    name: element.name,
                    language: element.language
                }
                namesByLang.push(item)
            }
        )

        await Special.findByIdAndUpdate(req.params.id, { namesByLang: namesByLang, icon: req.body.icon, updatedAt: Date.now() })
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err)
    }
}

controller.deleteSpecial = async(req, res) => {
    const id = req.params.id

    if (!id) {
        res.status(400).send()
    }

    try {
        await Special.findByIdAndDelete(id)
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

module.exports = controller