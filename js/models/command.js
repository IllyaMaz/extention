const mongoose = require('mongoose')

const CommandSchema = new mongoose.Schema({
    uuid: String,
    name: String,
    active: Boolean,
    script: String,
    screenshotRule: String
})

const Command = new mongoose.model('Command', CommandSchema)

module.exports = Command