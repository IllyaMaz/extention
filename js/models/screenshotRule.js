const mongoose = require('mongoose')

const screenshotRule = new mongoose.Schema({
    title: String,
    url: String,
})

const ScreenshotRule = new mongoose.model('ScreenshotRule', screenshotRule)

module.exports = ScreenshotRule