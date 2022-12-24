const { Schema, model } = require('mongoose')

const exerciseSchema = new Schema({
    username: String,
    description: String,
    duration: Number,
    date: String
}, {
    versionKey: false
})

module.exports = model("Exercise", exerciseSchema)