const User = require('../models/User')
const Exercise = require('../models/Exercise')
const ObjectId = require('mongoose').Types.ObjectId

const getLogs = (req, res) => {
    User.findById(req.params._id, (err, doc) => {
        if (err) res.sendStatus(500)

        let found = Exercise.find({
            username: doc.username,
        }, (err, result) => {
            if (err) res.sendStatus(500)

            if (req.query.from && req.query.to) {
                result = result.filter(el => {
                    let date = new Date(el.date).toISOString().slice(0, 10)
                    console.log(`from ${req.query.from}, to ${req.query.to}, date ${date}`);
                    return date >= req.query.from && date <= req.query.to
                })
            }

            if (req.query.limit) result = result.slice(0, parseInt(req.query.limit))

            res.send({
                username: doc.username,
                count: result.length,
                _id: doc._id,
                log: result.map(el => {
                    return {
                        description: el.description,
                        duration: el.duration,
                        date: el.date
                    }
                })
            })
        })
    })
}

const createExercise = (req, res) => {
    User.findById(req.params._id, (err, doc) => {
        if (err) res.sendStatus(500)

        Exercise.create({
            username: doc.username,
            description: req.body.description,
            duration: parseInt(req.body.duration),
            date: (req.body.date) ? new Date(req.body.date).toDateString() : new Date().toDateString()
        }, (err, ex) => {
            if (err) { console.log(err); res.sendStatus(500) }
            ex._id = doc._id
            res.send(ex)
        })
    })
}

module.exports = {
    getLogs, createExercise
}