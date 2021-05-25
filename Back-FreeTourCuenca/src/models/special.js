const mongoose = require('mongoose')
const SchemaMongo = mongoose.Schema

const Schema = new SchemaMongo({
    namesByLang: [{
        name: String,
        language: { type: Schema.Types.ObjectId, ref: "language" }
    }],
    icon: String,
    savedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("special", Schema)