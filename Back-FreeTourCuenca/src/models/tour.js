const mongoose = require("mongoose");
const SchemaMongo = mongoose.Schema;

const Schema = new SchemaMongo({
    name: String,
    duration: Number,
    seats: Number,
    tourDetails: [{ type: Schema.Types.ObjectId, ref: "tourdetail" }],
    images: [{ type: Schema.Types.ObjectId, ref: "image" }],
    map: String,
    specialFeatures: [{ //Objeto de Array de special + boolean
        special: { type: Schema.Types.ObjectId, ref: "special" },
        value: Boolean
    }],
    savedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("tour", Schema);