const controller = {}
const Tour = require('../models/tour')
const TourDetail = require('../models/tourdetail')
const Guide = require('../models/guide')
const validator = ('../validators/tour.js')
const imageController = require('./image')

controller.saveTour = async(req, res) => {
    const valid = validator.validate(req.body)

    if (!valid) {
        res.status(400).send()
    }

    try {
        let images = []
        req.body.images.foreach(image => {
            images.push(imageController.saveImage2(image))
        })

        let specials = []
        req.body.specialFeatures.foreach(feature => {
            special.push({
                special: feature.special,
                value: feature.value
            })
        })

        let details = []
        req.body.tourDetails.foreach(detail => {
            let tourdates = detail.tourdates.map(element => {
                return {
                    day: element.day,
                    timePicker: element.timePicker.map(
                        time => {
                            return {
                                hour: time.hour,
                                remainingSeats: time.remainingSeats
                            }
                        })
                }
            })

            let tourdetail = new TourDetail({
                language: detail.language,
                tilte: detail.title,
                categories: detail.categories,
                guides: detail.guides,
                tourdates: tourdates
            })

            details.push(tourdetail.save((err, item) => {
                return item.id
            }))
        })

        const tour = new Tour({
            name: req.body.name,
            duration: req.body.duration,
            seats: req.body.seats,
            tourDetails: details,
            images: images,
            map: req.body.map,
            specialFeatures: special
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
        const tour = await tour.findById(id)
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
        const tours = await tour.find({ name: req.body.name })
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

controller.updateTour = async(req, res) => {
    const valid = validator.validate(req.body)

    if (!valid) {
        res.status(400).send()
    }

    try {
        let images = []
        req.body.images.foreach(image => {
            images.push(imageController.saveImage2(image))
        })

        let specials = []
        req.body.specialFeatures.foreach(feature => {
            special.push({
                special: feature.special,
                value: feature.value
            })
        })

        let details = []
        req.body.tourDetails.foreach(detail => {
            let tourdates = detail.tourdates.map(element => {
                return {
                    day: element.day,
                    timePicker: element.timePicker.map(
                        time => {
                            return {
                                hour: time.hour,
                                remainingSeats: time.remainingSeats
                            }
                        })
                }
            })

            let tourdetail = new TourDetail({
                language: detail.language,
                tilte: detail.title,
                categories: detail.categories,
                guides: detail.guides,
                tourdates: tourdates
            })

            details.push(tourdetail.save((err, item) => {
                return item.id
            }))
        })

        await Tour.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            duration: req.body.duration,
            seats: req.body.seats,
            tourDetails: details,
            images: images,
            map: req.body.map,
            specialFeatures: special,
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
        tour.tourDetail.foreach(async(tourdetail) => {
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