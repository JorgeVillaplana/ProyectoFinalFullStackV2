const mongoose = require('mongoose');
const SchemaMongo = mongoose.Schema

const Schema = new SchemaMongo({
    title: { type: String, unique: true },
    text: String,
    image: String,
    category: String,
    language: { type: String, default: "es" },
    savedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("post", Schema)