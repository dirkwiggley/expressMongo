const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AttributeType = new Schema(
    {
        name: { type: String, required: true },
        abbreviation: { type: String, required: true },
        description: { type: String, required: true },
        ordinal: { type: Number, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('attributeType', AttributeType)