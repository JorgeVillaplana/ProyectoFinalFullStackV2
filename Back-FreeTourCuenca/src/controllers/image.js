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

controller.getImage = async(req, res) => {
    /*try{
        const 
    }*/
}