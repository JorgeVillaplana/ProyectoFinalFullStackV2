const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: { type: String, unique: true },
    name: String,
    password: String,
    role: String,
    savedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

UserSchema.pre('save', async next => {
    try {
        const user = this
        const hash = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10))
        user.password = hash
        next()
    } catch (error) {
        next(error)
    }
})

UserSchema.methods.isValidPassword = async function(password) {
    const compare = await bcrypt.compare(password, this.password)
    return compare
}

module.exports = mongoose.model("user", UserSchema);