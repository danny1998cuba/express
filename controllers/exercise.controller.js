const User = require('../models/User')
const Exercise = require('../models/Exercise')

const getLogs = (req, res) => {

}

const createExercise = (req, res) => {
    User.findById(req.params._id, (err, doc) => {
        if (err) res.sendStatus(500)

        Exercise.create({
            username: doc.username,
            description: req.body.description,
            duration: parseInt(req.body.duration),
            date: (req.body.date) ? new Date(req.body.date).toDateString() : new Date().toDateString()
        }, (err, doc) => {
            if (err) res.sendStatus(500)
            res.send(doc)
        })
    })
}

module.exports = {
    getLogs, createExercise
}