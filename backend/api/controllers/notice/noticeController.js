const Notice = require("../../../models/Notice")

const notice_get = async (req, res) => {
    if (req.query.limit) {
        getNoticeIndex(req, res)
    }
    else if (req.query.id) {
        getNotices(req, res)
    }
}

const getNoticeIndex = async (req, res) => {
    try {
        const limit = req.query.limit
        const result = await Notice.find().limit(limit).sort({createdAt: -1})
        res.send(result.map((index) => {return index._id}))
    }
    catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

const getNotices = async (req, res) => {
    try {
        const array = req.query.id.split(',')
        const notices = await Notice.find({_id: {$in: array}}).sort({createdAt: -1})

        res.send(notices)
    }
    catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

module.exports = {
    notice_get
}