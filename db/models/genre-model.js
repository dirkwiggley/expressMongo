const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Genre = new Schema(
    {
        name: { type: String, required: true },
        abilities: [ { 
            id: { type: String, required: false }, 
            name: { type: String, required: false } } ],
        races: [ { 
            id: { type: String, required: false }, 
            name: { type: String, required: false } } ],
        edges: [ { 
            id: { type: String, required: false }, 
            name: { type: String, required: false } } ],
        hindrances: [ { 
            id: { type: String, required: false }, 
            name: { type: String, required: false } } ],
        skills: [ { 
            id: { type: String, required: false }, 
            name: { type: String, required: false } } ],
        arcaneBackgrounds: [ { 
            id: { type: String, required: false },
            name: { type: String, required: false } } ],
        powers: [ { 
            id: { type: String, required: false },
            name: { type: String, required: false } } ]
    },
    { timestamps: true },
)

module.exports = mongoose.model('genre', Genre)