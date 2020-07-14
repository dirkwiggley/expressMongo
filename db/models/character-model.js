const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Character = new Schema(
    {
        campaign: { type: String, required: true },
        name: { type: String, required: true },
        player: { type: String, required: true },
        race: { type: String, required: true },
        abilities: [ { name: { type: String, required: true }, cost: { type: Number, required: true} } ],
        attributes: [ { name: { type: String, required: true }, dice: { type: String, required: true} } ],
        edges: [ { name: { type: String, required: true }, cost: { type: Number, required: true} } ],
        hindrances: [ { name: { type: String, required: true }, cost: { type: Number, required: true} } ],
        skills: [ { name: { type: String, required: true }, cost: { type: Number, required: true} } ],
        arcaneBackgrounds: [ { name: { type: String, required: true }, cost: { type: Number, required: true} } ],
        advances: { type: Number, required: true},
        rank: { type: String, required: true },
        description: { type: String, required: false }
    },
    { timestamps: true },
)

module.exports = mongoose.model('character', Character)