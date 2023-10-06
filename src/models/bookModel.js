/**
 * mongoose Book model
 */
const mongoose = require("mongoose")
const schema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publishedDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model("Book", schema)