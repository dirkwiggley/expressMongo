const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Dice = new Schema(
    {
        name: { type: String, required: true },
        max: { type: Number, required: true },
        min: { type: Number, required: true },
        ordinal: { type: Number, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('dice', Dice)