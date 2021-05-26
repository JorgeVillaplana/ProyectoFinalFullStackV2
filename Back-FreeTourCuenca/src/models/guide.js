const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GuideSchema = new Schema({
    name: String,
    surname: String,
    dni: { type: String, unique: true },
    phone: String,
    email: String,
    languages: [String],
    locations: [{
        city: String,
        state: String,
        country: String
    }],
    savedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("guide", GuideSchema);