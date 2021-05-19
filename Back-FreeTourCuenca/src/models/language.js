const mongoose = require('mongoose')
const SchemaMongo = mongoose.Schema

const Schema = new SchemaMongo({
    code: String,
    name: String,
    svg: String,
    savedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("language", Schema)