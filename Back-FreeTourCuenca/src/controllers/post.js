const controller = {}
const Post = require('../models/post')


controller.savePost = async(req, res) => {
    const valid = validator.validate(req.body)


    if (!valid) {
        res.status(400).send()
    }

    try {
        const post = new Post({ code: code, title: title, text: text, category: category, language: language, important: important })
        post.save()
        res.send()
    } catch (error) {
        res.status(500).send("Error")
    }
}

controller.getPosts = async(req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

controller.getPost = async(req, res) => {

    const id = req.params.id

    try {
        const post = await post.findById(id)
        res.json(post)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }

}

controller.getPostByCode = async(req, res) => {

    const code = req.params.code

    try {
        const post = await post.find(code)
        res.json(post)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }

}

controller.updatePost = async(req, res) => {
    const code = req.body.code //Cambiar para que sea aleatorio "Math.random().toString(36).slice(2)"
    const title = req.body.title
    const text = req.body.text
    const image = req.body.image
    const category = req.body.category
    const language = req.body.language
    const important = req.body.important

    if (!route) {
        res.status(400).send()
    }

    try {
        await Post.findByIdAndUpdate(req.params.id, { code: code, title: title, text: text, image: image, category: category, language: language, important: important, updatedAt: Date.now() })
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err)
    }
}

controller.deletePost = async(req, res) => {
    let id = req.params.id

    if (!id) {
        res.status(400).send()
    }

    try {
        await Post.findByIdAndDelete(id)
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

module.exports = controller