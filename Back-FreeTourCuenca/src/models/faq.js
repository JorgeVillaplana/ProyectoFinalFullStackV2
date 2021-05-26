const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FaqSchema = new Schema({
    details: [{
        question: String,
        answer: String,
    }],
    language: { type: Schema.Types.ObjectId, ref: "language" },
    savedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("faq", FaqSchema)