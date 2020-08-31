const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Hindrance = new Schema(
    {
        name: { type: String, required: true },
        summary: { type: String, required: true },
        description: { type: String, required: true },
        incompatible: [ { 
            dataType: { type: String, required: false }, 
            id: { type: String, required: false }, 
            name: { type: String, required: false } } ],
        special: [ { rule: { type: String, required: false} } ],
        cost: { type: Number, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('hindrance', Hindrance)