const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Schema = new Schema({
    tour: { type: Schema.Types.ObjectId, ref: "tour" },
    special: { type: Schema.Types.ObjectId, ref: "special" },
    value: Boolean,
    savedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("contain", Schema)