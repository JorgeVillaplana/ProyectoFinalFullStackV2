const mongoose = require('mongoose');
const Image = require('./image')
const SchemaMongo = mongoose.Schema

const Schema = new SchemaMongo({
    code: String,
    title: String,
    text: String,
    image: String, //Cambiar para que coja el tipo Image
    category: String,
    language: { type: String, default: "es" },
    savedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("post", Schema)