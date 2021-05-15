const mongoose = require('mongoose');
const SchemaMongo = mongoose.Schema

const Schema = new SchemaMongo({
    code: { type: String, default: Math.random().toString(36).slice(2) },
    title: String,
    text: String,
    image: { type: Schema.Types.ObjectId, ref: "image" },
    category: String,
    language: { type: String, default: "es" },
    important: { type: Bollean, default: false },
    savedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("post", Schema)