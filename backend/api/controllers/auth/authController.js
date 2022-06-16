const User = require('../../../models/User')
const { createCookie, createToken } = require('./tokenHelper')

const login_post = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.login(email, password)
        const token = createToken(user._id)
        createCookie(res, token)
        res.send(user)
    }

    catch (err) {
        console.log(err)
        res.send({"error": err.message})
    }
}

const signup_post = async (req, res) => {
    const {username, email, password} = req.body
    
    try {

        // check unique email
        const validEmail = await User.findOne({email})
        if (validEmail) {
            res.send({"error": "Email already in use"})
            return
        }

        const user = await User.create({username, email, password})
        const token = createToken(user._id)
        createCookie(res, token)
        res.send(user)
    }

    catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

module.exports = {
    signup_post,
    login_post
}