const mongoose = require("mongoose")
const password = "patatC0caC0la"
const dbname = "jwt"
const user = "admin"
const host = "freetourcluster.mkygh.mongodb.net"
const uri = `mongodb+srv://${user}:${password}@${host}/${dbname}?retryWrites=true&w=majority`

module.exports = mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})