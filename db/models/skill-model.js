const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Skill = new Schema(
    {
        name: { type: String, required: true },
        attribute: { type: String, required: true },
        summary: { type: String, required: true },
        description: { type: String, required: true },
        requires: [ { 
            dataType: { type: String, required: false }, 
            id: { type: String, required: false }, 
            name: { type: String, required: false },
            attribute: { type: String, required: false} } ],
        special: [ { rule: { type: String, required: false} } ]
    },
    { timestamps: true },
)

module.exports = mongoose.model('skill', Skill)