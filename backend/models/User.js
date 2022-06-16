const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const {v4 : uuidv4} = require('uuid')
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    _id: {
        type: String,
        default: () => uuidv4()
    },
    username: {
        type: String,
    },
    email: {
        type: String
    },
    password: {
        type:String
    }
}, {timestamps: true})

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt()
    console.log(this.password)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({email})
    if (user) {
        const auth = await bcrypt.compare(password, user.password)
        if (auth) {
            return user
        }
        throw Error("incorrect password")
    }   
    throw Error("incorrect email")
}

const User = mongoose.model("User", userSchema)
module.exports = User