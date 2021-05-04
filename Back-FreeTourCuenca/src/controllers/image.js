const controller = {}
const Image = require('../models/image')

controller.saveImage = async(req, res) => {

    const route = req.body.route

    if (!route) {
        res.status(400).send()
        return
    }

    try {
        const image = new Image({ route: route })
        image.save()
        res.send()
    } catch (error) {
        res.status(500).send("Error")
    }
}

controller.getImages = async(req, res) => {
    try {
        const images = await Image.find()
        res.json(images)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

controller.getImage = async(req, res) => {

    const id = req.params.id
    try {
        const image = await image.findById(id)
        res.json(image)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }

}

controller.updateImage = async(req, res) => {
    const route = req.body.route

    if (!route) {
        res.status(400).send()
    }

    try {
        await Image.findByIdAndUpdate(req.params.id, { route: route, updatedAt: Date.now() })
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err)
    }
}

controller.deleteImage = async(req, res) => {
    let id = req.params.id

    if (!id) {
        res.status(400).send()
    }

    try {
        await Image.findByIdAndDelete(id)
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}


module.exports = controller