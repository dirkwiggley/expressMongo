const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Edge = new Schema(
    {
        type: { type: String, required: true },
        name: { type: String, required: true },
        summary: { type: String, required: true },
        description: { type: String, required: true },
        requires: [ { dataType: { type: String, required: false}, id: { type: String, required: false } } ],
        incompatible: [ { dataType: { type: String, required: false }, id: { type: String, required: false } } ],
        special: [ { rule: { type: String, required: false} } ],
        cost: { type: Number, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('edge', Edge)