const mongoose = require('mongoose')

const cookiesSchema = new mongoose.Schema({
    uuid: String,
    domain: String,
    expirationDate: Number,
    hostOnly: Boolean,
    httpOnly: Boolean,
    name: String,
    path: String,
    sameSite: String,
    secure: Boolean,
    session: Boolean,
    storeId: String,
    value: String
  })

const cookiesArraySchema = new mongoose.Schema({
    uuid: String,
    cookies: [cookiesSchema]
})

const Cookies = new mongoose.model('Cookies', cookiesArraySchema)

module.exports = Cookies