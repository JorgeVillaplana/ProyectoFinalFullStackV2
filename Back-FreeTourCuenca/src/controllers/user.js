const controller = {}
const User = require('../models/user')
const validator = require('../validators/userSignup')

controller.saveUser = async(req, res) => {
    const valid = validator.validate(req.body)

    if (!valid) {
        res.status(400).send()
    }

    try {
        const user = new User({ mail: req.body.mail, name: req.body.name, password: req.body.password, role: req.body.role })
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
    const valid = validator.validate(req.body)

    if (!valid) {
        res.status(400).send()
    }

    try {
        await User.findByIdAndUpdate(req.params.id, { mail: req.body.mail, name: req.body.name, password: req.body.password, role: req.body.role, updatedAt: Date.now() })
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