const mongoose = require("mongoose");
const SchemaMongo = mongoose.Schema;

const Schema = new SchemaMongo({
    name: String,
    surname: String,
    dni: { type: String, unique: true },
    phone: String,
    email: String,
    languages: [String],
    location: [String],
    savedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("guide", Schema);