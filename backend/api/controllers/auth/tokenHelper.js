const jwt = require('jsonwebtoken')

const EXPIRY = 3 // expire in 3 days

// create jwt
const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT, {
        // jwt expiry is in seconds
        expiresIn: EXPIRY * 24 * 60 * 60 
    })
}

const createCookie = (res, jwt) => {
    res.cookie('jwt', jwt, {
        httpOnly: true,
        // cookie expiry is in milliseconds
        maxAge: EXPIRY * 24 * 60 * 60 * 1000
    });
}

module.exports = {
    createToken,
    createCookie
}