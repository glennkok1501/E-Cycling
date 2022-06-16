const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const {v4 : uuidv4} = require('uuid')

const pickupSchema = new Schema({
    _id: {
        type: String,
        default: () => uuidv4()
    },
    userImage: {
        type: String,
    },
    message: {
        type: String
    },
    status: {
        type: Number
    },
    vImage: {
        type: String,
    },
    vMessage: {
        type: String,
    },
    rating: {
        type: Number
    }
}, {timestamps: true})

const Pickup = mongoose.model("Post", pickupSchema)
module.exports = Pickup