const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Power = new Schema(
    {
        name: { type: String, required: true },
        rank: { type: String, required: true },
        powerPoints: { type: Number, required: true },
        range: { type: String, required: true },
        duration: [ { type: String, required: true } ],
        trappings: { type: String, required: true },
        description: { type: String, required: true },
        modifiers: [ { 
            name: { type: String, required: false}, 
            powerPoints: [ { type: Number, required: false } ],
            description: { type: String, required: false }
        } ]
    },
    { timestamps: true },
)

module.exports = mongoose.model('power', Power)