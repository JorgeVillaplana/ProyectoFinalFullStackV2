const mongoose = require('mongoose');
const SchemaMongo = mongoose.Schema;

const Schema = new SchemaMongo({
    code: String,
    question: String,
    answer: String,
    language: { type: Schema.Types.ObjectId, ref: "language" },
    savedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("faq", Schema)