const controller = {}
const Tour = require('../models/tour')
const TourDetail = require('../models/tourdetail')
const validator = ('../validators/tour.js')
const imageController = require('./image')

controller.saveTour = async(req, res) => {
    const valid = validator.validate(req.body)

    if (!valid) {
        res.status(400).send()
    }

    try {
        const images = req.body.images.map(image => {
            return imageController.saveImage2(image)
        })

        const tour = new Tour({
            name: req.body.name,
            duration: req.body.duration,
            seats: req.body.seats,
            tourDetails: req.body.tourDetails,
            images: images,
            map: req.body.map,
            specialFeatures: req.body.specialFeatures
        })
        tour.save()
        res.send()
    } catch (error) {
        res.status(500).send("Error")
    }
}

controller.getTours = async(req, res) => {
    try {
        const tours = await Tour.find()
            .populate({
                path: "tourdetail",
                match: { language: req.body.language._id },
                populate: {
                    path: 'guides'
                }
            })
        res.json(tours)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

controller.getTour = async(req, res) => {

    const id = req.params.id

    try {
        const tour = await Tour.findById(id)
            .populate({
                path: "tourdetail",
                match: { language: req.body.language._id },
                populate: {
                    path: 'guides'
                }
            })
        res.json(tour)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }

}

controller.getToursByName = async(req, res) => {

    try {
        const tours = await tour.find({ name: req.params.name })
            .populate({
                path: "tourdetail",
                populate: {
                    path: 'guides'
                }
            })
        res.json(tours)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }

}

controller.getToursByLang = async(req, res) => {

    try {
        const tours = await tour.find()
            .populate({
                path: "tourdetail",
                match: { language: req.params.language },
                populate: {
                    path: 'guides'
                }
            })
        res.json(tours)
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
        await Tour.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            duration: req.body.duration,
            seats: req.body.seats,
            tourDetails: req.body.tourDetails,
            images: req.body.images,
            map: req.body.map,
            specialFeatures: req.body.specialFeatures,
            updatedAt: Date.now()
        })
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
        const tour = await Tour.findById(id)
        tour.tourDetail.forEach(async(tourdetail) => {
            await TourDetail.findByIdAndDelete(tourdetail._id)
        })
        await Tour.findByIdAndDelete(tour._id)
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

module.exports = controller