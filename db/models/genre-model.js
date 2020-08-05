const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Genre = new Schema(
    {
        name: { type: String, required: true },
        races: [ { name: { type: String, required: false } } ],
        edges: [ { name: { type: String, required: false } } ],
        hindrances: [ { name: { type: String, required: false } } ],
        skills: [ { name: { type: String, required: false } } ],
        arcaneBackgrounds: [ { name: { type: String, required: false } } ]
    },
    { timestamps: true },
)

module.exports = mongoose.model('genre', Genre)