const Pickup = require("../../../models/Pickup")

const allPickups_get = async (req, res) => {
    const decodedToken = req.decodedToken
    try {
        const pickups = await Pickup.find({status: 0, UserId: {$ne: decodedToken.id}})
        res.send(pickups)
    }
    catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

const pickupAccept_put = async (req, res) => {
    const decodedToken = req.decodedToken
    const {pickupId} = req.body
    try {

        // check if already in progress with a pickup
        const hasPickup = await Pickup.findOne({vUserId: decodedToken.id, status: 1})
        if (hasPickup) {
            res.send({error: "Please complete the current pickup"})
            return
        }

        await Pickup.updateOne({_id: pickupId}, {status: 1, vUserId: decodedToken.id})
        res.sendStatus(200)
    }
    catch (err) {
        console.log(err)
        res.sendStatus(500)
    } 
}

module.exports = {
    allPickups_get,
    pickupAccept_put
}