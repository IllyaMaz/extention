const mongoose = require('mongoose')

const graberSchema = new mongoose.Schema({
    uuid: String,
    url: String,
    time: Number,
    name: String,
    value: String
})

const Graber = new mongoose.model('Graber', graberSchema)

module.exports = Graber