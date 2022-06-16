const User = require("../../../models/User")

const user_get = async (req, res) => {
    const userId = req.params.id
    try {
        const user = await User.findOne({_id: userId})
        res.send(user)
    }
    catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

module.exports = {
    user_get
}