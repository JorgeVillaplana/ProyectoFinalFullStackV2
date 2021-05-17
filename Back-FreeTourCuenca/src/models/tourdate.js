const mongoose = require("mongoose");
//const moment = require("moment");
const SchemaMongo = mongoose.Schema;

const Schema = new SchemaMongo({
    tour: { type: Schema.Types.ObjectId, ref: "tour" },
    date: Number, //Cambiar por fecha
    timeInit: Number, //Cambiar por hora de inicio, o hacer conversión en el controller
    remainingSeats: Number
})

module.exports = mongoose.model("tourdate", Schema);