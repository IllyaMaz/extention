const mongoose = require('mongoose')

const ipHistorySchema = new mongoose.Schema({
    uuid: String,
    ip4: String,
    ip6: String
})

const IpHistory = new mongoose.model('IpHistory', ipHistorySchema)

module.exports = IpHistory