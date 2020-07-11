const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Race = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        abilities: [ { id: { type: String, required: false } } ],
        skills: [ { id: { type: String, required: false } } ],
        edges: [ { id: { type: String, required: false } } ],
        hindrances: [ { id: { type: String, required: false } } ]
    },
    { timestamps: true },
)

module.exports = mongoose.model('race', Race)