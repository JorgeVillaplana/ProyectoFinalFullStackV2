const controller = {}
const User = require('../models/user')
const validator = require('../validators/userSignup')
const authJWT = require("../auth/jwt")

controller.saveUser = async(req, res) => {
    const valid = validator.validate(req.body)

    if (!valid) {
        res.status(400).send()
        return
    }
    console.log("Este es el body", req.body)
    try {
        const exists = await User.findOne({ email: req.body.email })
        if (exists) {
            console.log("usuario ya existe")
            res.status(400).send("usuario ya existe")
            return
        }
        const user = new User({ email: req.body.email, name: req.body.name, password: req.body.password, role: req.body.role })
        console.log("Este es el objeto user:", user)
        await user.save(err => {
            console.log("Hey! Estoy dentro del save() del controlador: ", err)
        })
        const data = await User.findOne({ email: req.body.email })
        res.send({ status: "ok", data: data })
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
        const user = await User.findById(id)
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

controller.login = async(req, res) => {
    const email = req.body.email
    const password = req.body.password

    if (!email || !password) {
        console.log("Datos obligatorios")
        res.status(401).send("Error en las credenciales")
        return
    }

    try {
        const user = await User.findOne({ email: email })

        if (!user) {
            console.log("El usuario no existe")
            res.status(401).send("Credenciales incorrectas")
            return
        }

        const validate = await user.isValidPassword(password)
        if (!validate) {
            console.log("Contraseña incorrecta")
            res.status(401).send("Contraseña incorrecta")
            return
        }

        const dataToken = authJWT.createToken(user)

        return res.send({
            access_token: dataToken[0],
            expires_in: dataToken[1]
        })
    } catch (err) {
        console.log(err)
        res.status(500).send("Error en el servidor")
    }
}


module.exports = controller