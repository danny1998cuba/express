const { Schema, model } = require('mongoose')

const exerciseSchema = new Schema({
    username: String,
    description: String,
    duration: Number,
    date: {
        type: Date,
        default: new Date()
    }
}, {
    versionKey: false
})

module.exports = model("Exercise", exerciseSchema)