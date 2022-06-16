const Comment = require("../../../models/Comment")
const Post = require("../../../models/Post")

const comment_post = async (req, res) => {
    const decodedToken = req.decodedToken
    const {body, username} = req.body
    const postId = req.params.postId

    try {
        const comment = await Comment.create({username, UserId: decodedToken.id, body, PostId: postId})
        await Post.updateOne({_id: postId}, {$push: {comments: comment._id}})
        res.send(comment)
    }

    catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
}

module.exports = {
    comment_post
}