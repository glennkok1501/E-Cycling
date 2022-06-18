const Pickup = require("../../../models/Pickup")
const { saveImage } = require("../File/imageHandler")

const createPickup_post = async (req, res) => {
    const decodedToken = req.decodedToken
    const {message, address} = req.body
    const fileData = req.files
    try {
        // check for existing
        const hasPickup = await Pickup.findOne({UserId: decodedToken.id, status: 0})
        if (hasPickup) {
            res.send({error: "A pickup has already been created"})
            return
        }

        const image = await saveImage(fileData.image, 'pickup', null, 512)
        const pickup = await Pickup.create({userMessage: message, userImage: image, UserId: decodedToken.id, address})
        res.send(pickup)
    }
    catch (err) {
        res.sendStatus(500)
        console.log(err)
    }
}

module.exports = {
    createPickup_post
}