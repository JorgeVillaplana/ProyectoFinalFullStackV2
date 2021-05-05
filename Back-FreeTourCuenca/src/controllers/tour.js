const controller = {}
const Tour = require('../models/tour')
const Image = require('../models/image')

controller.saveTour = async(req, res) => {

    const code = req.body.code
    const title = req.body.title
    const description = req.body.description
    const image = req.body.image
    const map = req.body.map
    const language = req.body.language
    const category = req.body.category

    if (!code || !title || !description || !image || !map || !language || !category) {
        res.status(400).send()
        return
    }

    try {
        const tour = new Tour({ code: code, title: title, desciption: description, image: image, map: map, language: language, category: category })
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
    const code = req.body.code
    const title = req.body.title
    const description = req.body.description
    const image = req.body.image
    const map = req.body.map
    const language = req.body.language
    const category = req.body.category

    if (!route) {
        res.status(400).send()
    }

    try {
        await Tour.findByIdAndUpdate(req.params.id, { code: code, title: title, desciption: description, image: image, map: map, language: language, category: category, updatedAt: Date.now() })
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