const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Character = new Schema(
    {
        campaign: { type: String, required: true},
        campaignId: { type: String, required: false },
        owner: {
            id: { type: String, required: false },
            login: { type: String, required: false },
            name: { type: String, required: false },
            nickname: { type: String, required: true}
        },
        name: { type: String, required: true },
        race: { 
            name: { type: String, required: true },
            id: { type: String, required: false }
        },
        abilities: [ { 
            name: { type: String, required: true },
            id: { type: String, required: false },
            cost: { type: Number, required: true }, 
            paid: [ { type: String, required: false } ],
            notes: { type: String, required: false } } 
        ],
        attributes: [ { 
            name: { type: String, required: true },
            dice: { type: String, required: true },
            paid: [ { type: String, required: false } ],
            modifiers: [ {
                name: { type: String, required: false },
                type: { type: String, required: false },
                value: { type: String, required: false }
            } ] 
        } ],
        edges: [ { 
            name: { type: String, required: true },
            id: { type: String, required: false }, 
            paid: [ { type: String, required: false } ], 
        } ],
        hindrances: [ { 
            name: { type: String, required: true },
            id: { type: String, required: false }, 
            cost: { type: Number, required: true },
            paid: { type: String, required: false } } ],
        skills: [ { 
            name: { type: String, required: true },
            id: { type: String, required: false }, 
            paid: [ { type: String, required: false } ],
            modifiers: [ {
                name: { type: String, required: false },
                type: { type: String, required: false },
                value: { type: String, required: false }
            } ] 
        } ],
        arcaneBackgrounds: [ { 
            name: { type: String, required: true },
            id: { type: String, required: false }, 
            paid: { type: String, required: false }
        } ],
        powers: [ { 
            name: { type: String, required: true },
            id: { type: String, required: false }, 
            cost: { type: Number, required: true },
            paid: { type: String, required: false },
            modifiers: [ {
                name: { type: String, required: false },
                type: { type: String, required: false },
                value: { type: String, required: false }
            } ] } ],
        advances: { type: Number, required: true },
        rank: { type: String, required: true },
        description: { type: String, required: false }
    },
    { timestamps: true },
)

module.exports = mongoose.model('character', Character)