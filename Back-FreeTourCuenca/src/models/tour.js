const mongoose = require("mongoose");
const Image = require("image")
const SchemaMongo = mongoose.Schema;

const Schema = new SchemaMongo({
    code: String,
    title: String,
    description: String,
    image: Image,
    map: String,
    language: String,
    category: String,
    savedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("tour", Schema);