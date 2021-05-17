const mongoose = require('mongoose');
const SchemaMongo = mongoose.Schema

const Schema = new SchemaMongo({
    category: String,
    tour: { type: Schema.Types.ObjectId, ref: "tour" },
    savedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("tour.category", Schema)