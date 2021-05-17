const mongoose = require('mongoose');
const SchemaMongo = mongoose.Schema

const Schema = new SchemaMongo({
    code: { type: String, default: Math.random().toString(36).slice(2) },
    title: String,
    text: String,
    image: { type: Schema.Types.ObjectId, ref: "image" },
    language: { type: String, default: "es" },
    important: { type: Boolean, default: false },
    categories: { type: Schema.Types.ObjectId, ref: "post.categories" },
    savedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("post", Schema)