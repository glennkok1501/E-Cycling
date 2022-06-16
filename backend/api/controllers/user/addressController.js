const User = require("../../../models/User")

const address_post = async (req, res) => {
    const decodedToken = req.decodedToken
    const {name, address, postalCode} = req.body

    try {
        await User.updateOne({_id: decodedToken.id}, {$push: {addresses: {name, address, postalCode}}})
        res.send({name, address, postalCode})
    }
    catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

const address_get = async (req, res) => {
    const decodedToken = req.decodedToken
    try {
        const user = await User.findOne({_id: decodedToken.id})
        res.send(user.addresses)
    }
    catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

const address_delete = async (req, res) => {
    const decodedToken = req.decodedToken
    const {name} = req.body

    try {
        await User.updateOne({_id: decodedToken.id}, {$pull: {addresses: {name: name}}})
        res.sendStatus(200)
    }
    catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

module.exports ={
    address_get,
    address_post,
    address_delete
}