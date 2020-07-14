const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Campaign = new Schema(
    {
        name: { type: String, required: true },
        genres: [ { name: { type: String, required: true } } ],
        races: [ { name: { type: String, required: true } } ],
        edges: [ { name: { type: String, required: true } } ],
        hindrances: [ { name: { type: String, required: true } } ],
        skills: [ { name: { type: String, required: true } } ],
        arcaneBackgrounds: [ { name: { type: String, required: false } } ]
    },
    { timestamps: true },
)

module.exports = mongoose.model('campaign', Campaign)