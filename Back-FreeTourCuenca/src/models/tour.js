const mongoose = require("mongoose");
const SchemaMongo = mongoose.Schema;

const Schema = new SchemaMongo({
    title: { type: String, unique: true },
    description: String,
    image: String,
    maps: String,
    savedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("tour", Schema);