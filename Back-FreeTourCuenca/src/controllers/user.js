const controller = {}
const User = require('../models/user')

controller.saveUser = async(req, res) => {

    const mail = req.body.mail
    const name = req.body.name
    const password = req.body.password

    if (!mail || !name || !password) {
        res.status(400).send()
        return
    }

    try {
        const user = new User({ mail: mail, name: name, password: password })
        user.save()
        res.send()
    } catch (error) {
        res.status(500).send("Error")
    }
}

controller.getUsers = async(req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

controller.getUser = async(req, res) => {

    const id = req.params.id
    try {
        const user = await user.findById(id)
        res.json(user)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }

}

controller.updateUser = async(req, res) => {
    const mail = req.body.mail
    const name = req.body.name
    const password = req.body.password

    if (!route) {
        res.status(400).send()
    }

    try {
        await User.findByIdAndUpdate(req.params.id, { mail: mail, name: name, password: password, updatedAt: Date.now() })
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err)
    }
}

controller.deleteUser = async(req, res) => {
    let id = req.params.id

    if (!id) {
        res.status(400).send()
    }

    try {
        await User.findByIdAndDelete(id)
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}


module.exports = controller