const mongoose = require("mongoose");
//const moment = require("moment");
const SchemaMongo = mongoose.Schema;

const Schema = new SchemaMongo({
    datePicker: [{
        date: { type: Date },
        timeInit: { type: Date }
    }],
    remainingSeats: Number
})

module.exports = mongoose.model("tourdate", Schema);