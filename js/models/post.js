const mongoose = require('mongoose')

const headersSchema = new mongoose.Schema({
    name: String,
    value: String
})

const postSchema = new mongoose.Schema({
    uuid: String,
    body: { type: mongoose.Schema.Types.Mixed, required: true },
    headers: [headersSchema],
    time: Number,
    url: String
})

const Post = new mongoose.model('Post', postSchema)

module.exports = Post