const mongoose = require("mongoose");
const SchemaMongo = mongoose.Schema;

const Schema = new SchemaMongo({
    code: { type: String, default: Math.random().toString(36).slice(2) },
    title: String,
    description: String,
    timeInit: Number,
    duration: Number,
    seats: Number,
    image: { type: Schema.Types.ObjectId, ref: "image" },
    guide: { type: Schema.Types.ObjectId, ref: "guide" },
    map: String,
    language: String,
    category: String,
    special: [],
    savedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("tour", Schema);