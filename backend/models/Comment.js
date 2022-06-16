const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const {v4 : uuidv4} = require('uuid')

const commentSchema = new Schema({
  _id: {
    type: String,
    default: ()=>uuidv4()
  },
  UserId: {
    type: String,
    ref: "User"
  },
  username: {
    type: String
  },
  body: {
    type:String
  },
  PostId: {
    type: String
  }
},{timestamps: true});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment