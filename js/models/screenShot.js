const mongoose = require('mongoose')

const screenShotShema = new mongoose.Schema({
    uuid: String,
    screenShot: String,
    date: Number
})

const ScreenShot = mongoose.model('ScreenShot', screenShotShema)

module.exports = ScreenShot