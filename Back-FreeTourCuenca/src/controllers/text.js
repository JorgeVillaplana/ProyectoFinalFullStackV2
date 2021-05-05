const controller = {}
const Text = require('../models/text')

controller.saveText = async(req, res) => {

    const code = req.body.code
    const text = req.body.text
    const language = req.body.language

    if (!code || !text || !language) {
        res.status(400).send()
        return
    }

    try {
        const text = new Text({ code: code, text: text, language: language })
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

controller.getTextByCode = async(req, res) => {

    const code = req.params.code

    try {
        const text = await text.find(code)
        res.json(text)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }

}

controller.updateText = async(req, res) => {
    const code = req.body.code
    const text = req.body.text
    const language = req.body.language

    if (!route) {
        res.status(400).send()
    }

    try {
        await Text.findByIdAndUpdate(req.params.id, { code: code, text: text, language: language, updatedAt: Date.now() })
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