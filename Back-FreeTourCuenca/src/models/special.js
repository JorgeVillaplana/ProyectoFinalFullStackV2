const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SpecialSchema = new Schema({
    namesByLang: [{
        name: String,
        language: { type: Schema.Types.ObjectId, ref: "language" }
    }],
    icon: String,
    savedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("special", SpecialSchema)