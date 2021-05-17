const controller = {}
const Tour = require('../models/tour')
const validator = ('../validators/tour.js')

controller.saveTour = async(req, res) => {
    const valid = validator.validate(req.body)

    if (!valid) {
        res.status(400).send()
    }

    try {
        const tour = new Tour({ code: req.body.code, title: req.body.title, categories: req.body.categories, desciption: req.body.description, duration: req.body.duration, seats: req.body.seats, image: req.body.image, guide: req.body.guide, map: req.body.map, language: req.body.language, tourdates: req.body.tourdates })
        tour.save()
        res.send()
    } catch (error) {
        res.status(500).send("Error")
    }
}

controller.getTours = async(req, res) => {
    try {
        const tours = await Tour.find()
        res.json(tours)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

controller.getTour = async(req, res) => {

    const id = req.params.id

    try {
        const tour = await tour.findById(id)
        res.json(tour)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }

}

controller.getTourByCode = async(req, res) => {

    const code = req.params.code

    try {
        const tour = await tour.find(code)
        res.json(tour)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }

}

controller.updateTour = async(req, res) => {
    const valid = validator.validate(req.body)

    if (!valid) {
        res.status(400).send()
    }

    try {
        await Tour.findByIdAndUpdate(req.params.id, { code: req.body.code, title: req.body.title, categories: req.body.categories, desciption: req.body.description, duration: req.body.duration, seats: req.body.seats, image: req.body.image, guide: req.body.guide, map: req.body.map, language: req.body.language, tourdates: req.body.tourdates, updatedAt: Date.now() })
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err)
    }
}

controller.deleteTour = async(req, res) => {
    let id = req.params.id

    if (!id) {
        res.status(400).send()
    }

    try {
        await Tour.findByIdAndDelete(id)
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

module.exports = controller