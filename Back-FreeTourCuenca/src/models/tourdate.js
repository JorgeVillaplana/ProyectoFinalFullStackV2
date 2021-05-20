const mongoose = require("mongoose");
//const moment = require("moment");
const SchemaMongo = mongoose.Schema;

const Schema = new SchemaMongo({
    date: Date, //Cambiar por fecha
    timeInit: Date,
    remainingSeats: Number
})

module.exports = mongoose.model("tourdate", Schema);