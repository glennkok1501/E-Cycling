const Pickup = require("../../../models/Pickup")
const { saveImage } = require("../File/imageHandler")
const {updateUserPoints} = require('./pickupController')
const selfPickup_post = async (req, res) => {
    const decodedToken = req.decodedToken
    const {message} = req.body
    const fileData = req.files
    try {
        var now = new Date();
        var startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        // check for existing
        const hasPickup = await Pickup.findOne({UserId: decodedToken.id, created_on: {$gte: startOfToday}, self: true})
        if (hasPickup) {
            res.send({error: "You can only do a self-pickup once per day"})
            return
        }

        const image = await saveImage(fileData.image, 'pickup', null, 512)
        // points
        const points = 7.5
        await updateUserPoints(decodedToken.id, points)
        const pickup = await Pickup.create({userMessage: message, userImage: image, UserId: decodedToken.id, status: 2, self: true, rating: points})
        res.send(pickup)
    }
    catch (err) {
        res.sendStatus(500)
        console.log(err)
    }
}

module.exports = {
    selfPickup_post
}