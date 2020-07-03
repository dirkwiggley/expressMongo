const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Dice = new Schema(
    {
        name: { type: String, required: true },
        max: { type: String, required: true },
        min: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('dice', Dice)