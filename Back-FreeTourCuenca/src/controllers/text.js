const controller = {}
const Text = require('../models/text')
const validator = require('../validators/text')

controller.saveText = async(req, res) => {
    const valid = validator.validate(req.body)

    if (!valid) {
        res.status(400).send()
    }

    try {
        let texts = []
        req.body.texts.foreach(
            text => {
                const object = {
                    code: text.code,
                    text: text.text
                }
            }
        )

        const text = new Text({
            texts: texts,
            language: req.body.language
        })
        text.save()
        res.send()
    } catch (error) {
        res.status(500).send("Error")
    }
}

controller.getTexts = async(req, res) => {
    try {
        const texts = await Text.find()
        res.json(texts)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

controller.getText = async(req, res) => {

    const id = req.params.id
    try {
        const text = await text.findById(id)
        res.json(text)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }

}

controller.getTextByLang = async(req, res) => {

    const language = req.body.language

    try {
        const texts = await text.find({ language: language })
        res.json(texts)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }

}

controller.updateText = async(req, res) => {
    const valid = validator.validate(req.body)

    if (!valid) {
        res.status(400).send()
    }

    try {
        let texts = []
        req.body.texts.foreach(
            text => {
                const object = {
                    code: text.code,
                    text: text.text
                }
            }
        )
        await Text.findByIdAndUpdate(req.params.id, {
            texts: texts,
            language: req.body.language,
            updatedAt: Date.now()
        })
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err)
    }
}

controller.deleteText = async(req, res) => {
    let id = req.params.id

    if (!id) {
        res.status(400).send()
    }

    try {
        await Text.findByIdAndDelete(id)
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

module.exports = controller