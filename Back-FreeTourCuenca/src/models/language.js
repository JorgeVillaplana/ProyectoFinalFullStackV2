const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LanguageSchema = new Schema({
    code: String,
    name: String,
    icon: String,
    savedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("language", LanguageSchema)