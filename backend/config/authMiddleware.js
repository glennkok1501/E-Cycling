const jwt = require('jsonwebtoken');
require('dotenv').config()

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    // check jsob web token exists and is verified
    if (token) {
        jwt.verify(token, process.env.JWT, (err, decodedToken) => {
            if (err){
                console.log(err.message);
                res.send()
            }
            else{
                req.decodedToken = decodedToken
                next()
            }
        })
    }
    else {
        res.send()
    }
}

module.exports = {
    requireAuth
}