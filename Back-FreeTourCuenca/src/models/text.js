const mongoose = require('mongoose')
const SchemaMongo = mongoose.Schema

const Schema = new SchemaMongo({
    texts: [{
        code: String,
        text: String
    }],
    language: { type: Schema.Types.ObjectId, ref: "language" },
    savedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("text", Schema)