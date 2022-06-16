const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const {v4 : uuidv4} = require('uuid')

const postSchema = new Schema({
    _id: {
        type: String,
        default: () => uuidv4()
    },
    image: {
        type: String,
    },
    caption: {
        type: String
    },
    UserId: {
        type: String,
        ref: "User" 
    }
}, {timestamps: true})

const Post = mongoose.model("Post", postSchema)
module.exports = Post