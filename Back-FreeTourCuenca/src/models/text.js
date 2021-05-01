const mongoose = require('mongoose')
const SchemaMongo = mongoose.Schema

const Schema = new SchemaMongo({
    code: { type: String, unique: true },
    text: String,
    language: String,
    savedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("text", Schema)