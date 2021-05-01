const mongoose = require("mongoose");
const SchemaMongo = mongoose.Schema;

const Schema = new SchemaMongo({
    route: String,
    savedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("image", Schema);