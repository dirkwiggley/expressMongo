const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Campaign = new Schema(
    {
        name: { type: String, required: true },
        genre: { 
            id: { type: String, required: false }, 
            name: { type: String, required: true } },
        owner: { 
            id: { type: String, required: false }, 
            login: { type: String, required: true }, 
            nickname: { type: String, required: true } },
        gms: [ { 
            id: { type: String, required: false }, 
            login: { type: String, required: false }, 
            nickname: { type: String, required: false } } ],
        players: [ { 
            id: { type: String, required: false }, 
            login: { type: String, required: false }, 
            nickname: { type: String, required: false } } ],
        metaData: {
            abilities: [ { 
                id: { type: String, required: false }, 
                name: { type: String, required: true },
                cost: { type: Number, required: true } } ],
            races: [ { 
                id: { type: String, required: false }, 
                name: { type: String, required: true } } ],
            edges: [ { 
                id: { type: String, required: false }, 
                name: { type: String, required: true },
                cost: { type: Number, required: true } } ],
            hindrances: [ { 
                id: { type: String, required: false }, 
                name: { type: String, required: true },
                cost: { type: Number, required: true } } ],
            skills: [ { 
                id: { type: String, required: false }, 
                name: { type: String, required: true } } ],
            arcaneBackgrounds: [ { 
                id: { type: String, required: false }, 
                name: { type: String, required: true } } ],
            powers: [ { 
                id: { type: String, required: false }, 
                name: { type: String, required: false },
                cost: [ { type: Number, required: true } ] } ],
        },
        description: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('campaign', Campaign)