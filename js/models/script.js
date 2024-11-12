const mongoose = require('mongoose')

const scriptSchema = new mongoose.Schema({
    name: String,
    script: String,
    url: String
})

const Script = new mongoose.model('Script', scriptSchema)

module.exports = Script