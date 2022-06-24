const Pickup = require("../../../models/Pickup")
const { saveImage } = require("../File/imageHandler")

const allPickups_get = async (req, res) => {
    const decodedToken = req.decodedToken
    try {
        const pickups = await Pickup.find({status: 0, UserId: {$ne: decodedToken.id}}).populate('UserId').sort({createdAt: -1})
        res.send(pickups)
    }
    catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

const myPickups_get = async (req, res) => {
    const decodedToken = req.decodedToken
    try {
        const pickups = await Pickup.find({vUserId: decodedToken.id}).populate('UserId').sort({createdAt: -1})
        res.send(pickups)
    }
    catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

const pickupsHistory_get = async (req, res) => {
    const decodedToken = req.decodedToken
    try {
        const pickups = await Pickup.find({UserId: decodedToken.id}).populate(['UserId', 'vUserId']).sort({createdAt: -1})
        res.send(pickups)
    }
    catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

const pickupAccept_put = async (req, res) => {
    const decodedToken = req.decodedToken
    const {pickupId, datetime} = req.body
    try {

        // check if already in progress with a pickup
        const hasPickup = await Pickup.findOne({vUserId: decodedToken.id, status: 1})
        if (hasPickup) {
            res.send({error: "Please complete the current pickup"})
            return
        }

        await Pickup.updateOne({_id: pickupId}, {status: 1, vUserId: decodedToken.id, datetime})
        res.sendStatus(200)
    }
    catch (err) {
        console.log(err)
        res.sendStatus(500)
    } 
}

const pickupComplete_put = async (req, res) => {
    const {pickupId, message} = req.body
    const fileData = req.files
    try {
        const image = await saveImage(fileData.image, 'pickup', null, 256)
        const pickup = await Pickup.findOne({_id: pickupId})
        pickup.status = 2
        pickup.vImage = image
        pickup.vMessage = message
        await pickup.save()
        res.send(pickup)
    }
    catch (err) {
        console.log(err)
        res.sendStatus(500)
    } 
}

const rate_put = async (req, res) => {
    const {pickupId, rating} = req.body
    const decodedToken = req.decodedToken
    try {
        // check user is vUserId
        const pickup = await Pickup.findOne({_id: pickupId})
        if (pickup.UserId !== decodedToken.id) {
            res.sendStatus(400)
            return
        }
        pickup.rating = rating
        await pickup.save()
        res.sendStatus(200)
    }
    catch (err) {
        console.log(err)
        res.sendStatus(500)
    } 
}

module.exports = {
    allPickups_get,
    pickupAccept_put,
    myPickups_get,
    pickupComplete_put,
    pickupsHistory_get,
    rate_put
}