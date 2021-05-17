const mongoose = require('mongoose');
const SchemaMongo = mongoose.Schema

const Schema = new SchemaMongo({
    category: String,
    post: { type: Schema.Types.ObjectId, ref: "post" },
    savedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("post.category", Schema)