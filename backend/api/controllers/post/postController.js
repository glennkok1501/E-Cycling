const Post = require("../../../models/Post")

const posts_get = (req, res) => {
    if (req.query.id) {
        getPosts(req, res)
    }
    else if (req.query.limit) {
        getPostsIndex(req, res)
    }
}

const getPosts = async (req, res) => {
    try {
        const array = req.query.id.split(',')
        const posts = await Post.find({_id: {$in: array}}).populate('UserId').populate('comments').sort({createdAt: -1})

        res.send(posts)
    }
    catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

const getPostsIndex = async (req, res) => {
    try {
        const limit = req.query.limit
        const result = await Post.find().limit(limit)
        res.send(result.map((index) => {return index._id}))
    }
    catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

const userPosts_get = async (req, res) => {
    const userId = req.params.id
    try {
        const posts = await Post.find({UserId: userId}).populate('UserId').populate('comments').sort({createdAt: -1})
        res.send(posts)
    }

    catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

module.exports = {
    posts_get,
    userPosts_get
}