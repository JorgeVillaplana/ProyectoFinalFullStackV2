const mongoose = require('mongoose')
const SchemaMongo = mongoose.Schema

const Schema = new SchemaMongo({
    name: String,
    icon: String,
    language: { type: Schema.Types.ObjectId, ref: "language" },
    savedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("special", Schema)