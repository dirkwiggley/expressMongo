const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Campaign = new Schema(
    {
        name: { type: String, required: true },
        gms: [ { gmId: { type: String, required: true } } ]
    },
    { timestamps: true },
)

module.exports = mongoose.model('campaign', Campaign)