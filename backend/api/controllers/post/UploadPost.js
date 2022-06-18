const Post = require("../../../models/Post")
const { saveImage } = require("../File/imageHandler")

const upload_post = async (req, res) => {
    const decodedToken = req.decodedToken
    const fileData = req.files
    const {caption} = req.body

    try {
        const image = await saveImage(fileData.image, 'post', 512, 512)
        const post = await Post.create({image, caption, UserId: decodedToken.id})
        res.send(post)
    }
    
    catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

module.exports = {
    upload_post
}