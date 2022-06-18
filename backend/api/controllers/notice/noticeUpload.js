const Notice = require("../../../models/Notice")
const { saveImage } = require("../File/imageHandler")

const upload_post = async (req, res) => {
    try {
        const fileData = req.files
        const {title, description, org, email, website, date} = req.body
        console.log(date)

        var image = null
        if (fileData) {
            image = await saveImage(fileData.image, 'notice', null, 512)
        }
        
        const notice = await Notice.create({title, description, image, org, email, website, date})
        res.send(notice)
    }
    catch (err) {
        console.log(err)
        res.sendStatus(400)
    }
}

module.exports = {
    upload_post
}