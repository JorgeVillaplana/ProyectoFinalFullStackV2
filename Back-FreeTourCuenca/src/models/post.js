const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
    details: [{ type: Schema.Types.ObjectId, ref: "postdetail" }],
    image: { type: Schema.Types.ObjectId, ref: "image" },
    important: { type: Boolean, default: false },
    savedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("post", PostSchema);