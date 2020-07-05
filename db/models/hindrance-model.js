const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Hindrance = new Schema(
    {
        name: { type: String, required: true },
        summary: { type: String, required: true },
        description: { type: String, required: true },
        incompatibilities: [ { dataType: { type: String, required: true }, id: { type: String, required: true } } ],
        cost: { type: Number, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('hindrance', Hindrance)