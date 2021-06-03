const controller = {}
const Post = require('../models/post')
const Postdetail = require('../models/postdetail')
const Image = require('../models/image')
const validator = require('../validators/post')


controller.savePost = async(req, res) => {
    const valid = validator.validate(req.body)

    if (!valid) {
        res.status(400).send()
    }

    try {
        const postDetails = new Postdetail({
            title: req.body.details[0].title,
            text: req.body.details[0].text,
            language: req.body.details[0].language,
            categories: req.body.details[0].categories
        })

        const image = new Image({
            detail: req.body.image.detail,
            route: req.body.image.route
        })

        postDetails.save()
        image.save()
        const post = new Post({
            details: postDetails._id,
            image: image._id,
            important: req.body.important
        })
        post.save()
        res.send()
    } catch (error) {
        console.log("Holi, he dado un errorcito", error)
        res.status(500).send("Error: ", error)
    }
}

controller.getPosts = async(req, res) => {
    try {
        const posts = await Post.find().populate({ path: 'postdetail', match: { language: req.body.language } })
        res.json(posts)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

controller.getPost = async(req, res) => {
    const id = req.params.id

    try {
        const post = await post.findById(id).populate({ path: 'postdetail', match: { language: req.body.language } })
        res.json(post)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

controller.getImportantPosts = async(req, res) => {
    try {
        const posts = await Post.find({ important: true }).populate({ path: 'postdetail', match: { language: req.body.language } })
        res.json(posts)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

controller.getPostByLanguage = async(req, res) => {
    try {
        const posts = await Post.find()
            .populate({
                path: 'details',
                populate: {
                    path: 'postdetail',
                    match: { language: req.params.language }
                }
            })
            .populate({ path: 'image' })
        res.json(posts)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

controller.updatePost = async(req, res) => {

    if (!valid) {
        res.status(400).send()
    }

    try {
        await Post.findByIdAndUpdate(req.params.id, {
            details: req.body.details,
            image: req.body.image,
            important: req.body.important,
            updatedAt: Date.now()
        })
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
        const post = await Post.findById(id)
        post.details.foreach(async(detail) => {
            await Postdetail.findByIdAndDelete(detail._id)
        })
        await Post.findByIdAndDelete(post._id)
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

module.exports = controller