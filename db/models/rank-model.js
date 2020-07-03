const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Rank = new Schema(
    {
        name: { type: String, required: true },
        max: { type: Number, required: true },
        min: { type: Number, required: true },
        ordinal: { type: Number, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('rank', Rank)