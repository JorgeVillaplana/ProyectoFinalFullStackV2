const controller = {}
const Faq = require('../models/faq')
const validator = require('../validators/faq')

controller.saveFaq = async(req, res) => {
    const valid = validator.validate(req.body)

    if (!valid) {
        res.status(400).send()
    }

    try {
        let details = []
        req.body.details.foreach(
            element => {
                const detail = {
                    question: element.question,
                    answer: element.answer
                }
                details.push(detail)
            }
        )

        const faq = new Faq({
            details: details,
            language: req.body.language
        })
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

controller.getFaqByLang = async(req, res) => {

    const language = req.body.language

    try {
        const faq = await faq.find({ language: language })
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
        let details = []
        req.body.details.foreach(
            element => {
                const detail = {
                    question: element.question,
                    answer: element.answer
                }
                details.push(detail)
            }
        )

        await Faq.findByIdAndUpdate(
            req.params.id, {
                details: details,
                language: req.body.language,
                updatedAt: Date.now()
            })
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