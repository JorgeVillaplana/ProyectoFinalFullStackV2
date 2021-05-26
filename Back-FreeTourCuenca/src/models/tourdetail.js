const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TourDetailSchema = new Schema({
    language: { type: Schema.Types.ObjectId, ref: "language" },
    title: String,
    categories: [String],
    description: String,
    guides: [{ type: Schema.Types.ObjectId, ref: "guide" }],
    tourdates: [{
        day: Date,
        timePicker: [{
            hour: String,
            remainingSeats: Number
        }]
    }]
})

module.exports = mongoose.model("tourdetail", TourDetailSchema);