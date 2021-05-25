const mongoose = require("mongoose");
const SchemaMongo = mongoose.Schema;

const Schema = new SchemaMongo({
    code: { type: String, default: Math.random().toString(36).slice(2) },
    name: String,
    //title: String,
    //categories: [{ type: Schema.Types.ObjectId, ref: "tour.category" }],
    //description: String,
    duration: Number,
    seats: Number,
    images: [{ type: Schema.Types.ObjectId, ref: "image" }],
    //guides: [{ type: Schema.Types.ObjectId, ref: "guide" }],
    map: String,
    //language: { type: Schema.Types.ObjectId, ref: "language" },
    //tourdates: [{ type: Schema.Types.ObjectId, ref: "tourdate" }],
    //Objeto de Array de special + boolean
    savedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("tour", Schema);