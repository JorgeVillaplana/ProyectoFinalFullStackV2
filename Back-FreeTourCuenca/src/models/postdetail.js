const mongoose = require('mongoose');
const SchemaMongo = mongoose.Schema

const Schema = new SchemaMongo({
    title: String,
    text: String,
    language: { type: Schema.Types.ObjectId, ref: "language" },
    categories: [String],
    savedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("postdetail", Schema)