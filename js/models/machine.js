const mongoose = require('mongoose')
  
  const cookiesSchema = new mongoose.Schema({
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

  const machineSchema = new mongoose.Schema({
    uuid: String,
    ip: String,
    geo: String,
    cookies: [cookiesSchema],
    scripts: [String],
    screenshotRule: [String]
  });

const Machine = mongoose.model('Mashine', machineSchema)

module.exports = Machine