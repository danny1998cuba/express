const User = require('../models/User')

const getAll = (req, res) => {
    User.find({}, (err, list) => {
        if (err) res.sendStatus(500)
        res.json(list)
    })
}

const addOne = (req, res) => {
    User.create({ username: req.body.username }, (err, doc) => {
        if (err) res.sendStatus(500)
        res.send(doc)
    })
}

module.exports = {
    getAll,
    addOne
}