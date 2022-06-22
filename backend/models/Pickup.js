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
    userMessage: {
        type: String
    },
    address: {
        type: String
    },
    UserId: {
        type: String,
        ref: "User" 
    },
    status: {
        type: Number,
        default: 0
    },
    datetime: {
        type: Date
    },
    vImage: {
        type: String,
    },
    vMessage: {
        type: String,
    },
    vUserId: {
        type: String,
        ref: "User" 
    },
    rating: {
        type: Number
    }
}, {timestamps: true})

const Pickup = mongoose.model("Pickup", pickupSchema)
module.exports = Pickup