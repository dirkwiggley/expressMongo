const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Ability = new Schema(
    {
        name: { type: String, required: true },
        positive: { type: Boolean },
        description: { type: String, required: true },
        types: [ { type: { type: String, required: true }, subtype: { type: { type: String, required: false } } } ],
        incompatible: [ { dataType: { type: String, required: false }, id: { type: String, required: false }, name: { type: String, required: false } } ],
        max: { type: Number, required: true },
        cost: [ { type: Number, required: true } ]
    },
    { timestamps: true },
)

module.exports = mongoose.model('ability', Ability)