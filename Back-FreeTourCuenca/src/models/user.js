const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: { type: String, unique: true },
    name: String,
    password: { type: String, require: true },
    role: String,
    savedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

UserSchema.pre('save', async function(next) {
    try {
        const user = this
        console.log("Esto es desde el modelo: ", user, "Y tiene este this", this)
        const hash = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10))
        user.password = hash
        next()
    } catch (error) {
        console.log("Holi, he entrado al error del modelo: ", error)
        next(error)
    }
})

UserSchema.methods.isValidPassword = async function(password) {
    const compare = await bcrypt.compare(password, this.password)
    return compare
}

module.exports = mongoose.model("user", UserSchema);