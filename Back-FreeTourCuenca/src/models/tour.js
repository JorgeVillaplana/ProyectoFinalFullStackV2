const mongoose = require("mongoose");
const SchemaMongo = mongoose.Schema;

const Schema = new SchemaMongo({
    code: { type: String, default: Math.random().toString(36).slice(2) },
    title: String,
    categories: { type: Schema.Types.ObjectId, ref: "tour.categories" },
    description: String,
    duration: Number,
    seats: Number,
    image: { type: Schema.Types.ObjectId, ref: "images" },
    guide: { type: Schema.Types.ObjectId, ref: "guides" },
    map: String,
    language: { type: Schema.Types.ObjectId, ref: "language" },
    tourdates: { type: Schema.Types.ObjectId, ref: "tourdates" },
    savedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("tour", Schema);