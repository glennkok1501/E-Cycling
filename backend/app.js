const express = require('express')
const app = express();
const cors = require('cors')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const fileUpload = require("express-fileupload");
require('dotenv').config()

// middleware
app.use(express.static("public")) //static files
app.use(morgan('dev')) //logging
app.use(express.urlencoded( {extended: true}))
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:true, credentials:true}))
app.use(fileUpload());

// imported routes
const authRoutes = require('./api/routes/authRoutes')
const postRoutes = require('./api/routes/postRoutes')
const userRoutes = require('./api/routes/userRoutes')
const pickupRoutes = require('./api/routes/pickupRoutes')
const noticeRoutes = require('./api/routes/noticeRoutes')


// routes
app.use('/auth', authRoutes)

app.use('/post', postRoutes)

app.use('/user', userRoutes)

app.use('/pickup', pickupRoutes)

app.use('/notice', noticeRoutes)


// unknown requests
app.use((req, res) => res.send(null))

// connect to database
// docker run --name ecycling_db -p 27017:27017 -d mongo
const init = async () => {
    try {
        mongoose.set('bufferCommands', false)
        await mongoose.connect(`${process.env.DATABASE}`)

        // start server
        app.listen(process.env.PORT)
        console.log(`Service is ready to listen on port ${process.env.PORT}`)
    }
    catch(err){
        console.log(err)
    }
}

init()

