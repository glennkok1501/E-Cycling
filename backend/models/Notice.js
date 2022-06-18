const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const {v4 : uuidv4} = require('uuid')

const noticeSchema = new Schema({
    _id: {
        type: String,
        default: () => uuidv4()
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    org: {
        type: String
    },
    email: {
        type: String
    },
    image: {
        type: String
    },
    website: {
        type: String
    },
    date: {
        type: Date
    }
}, {timestamps: true})

const Notice = mongoose.model("Notice", noticeSchema)
module.exports = Notice