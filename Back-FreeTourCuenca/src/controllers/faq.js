const controller = {}
const Faq = require('../models/faq')
const validator = require('../validators/faq')

controller.saveFaq = async(req, res) => {
    const valid = validator.validate(req.body)

    if (!valid) {
        res.status(400).send()
    }

    try {
        const faq = new Faq({ code: req.body.code, question: req.body.question, answer: req.body.answer, language: req.body.language })
        faq.save()
        res.send()
    } catch (error) {
        res.status(500).send("Error")
    }
}

controller.getFaqs = async(req, res) => {
    try {
        const faqs = await Faq.find()
        res.json(faqs)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

controller.getFaq = async(req, res) => {

    const id = req.params.id
    try {
        const faq = await faq.findById(id)
        res.json(faq)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }

}

controller.getFaqByCode = async(req, res) => {

    const code = req.params.code

    try {
        const faq = await faq.find(code)
        res.json(faq)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }

}

controller.updateFaq = async(req, res) => {
    const valid = validator.validate(req.body)

    if (!valid) {
        res.status(400).send()
    }

    try {
        await Faq.findByIdAndUpdate(req.params.id, { code: req.body.code, question: req.body.question, answer: req.body.answer, language: req.body.language, updatedAt: Date.now() })
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err)
    }
}

controller.deleteFaq = async(req, res) => {
    let id = req.params.id

    if (!id) {
        res.status(400).send()
    }

    try {
        await Faq.findByIdAndDelete(id)
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

module.exports = controller