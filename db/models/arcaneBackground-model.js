const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArcaneBackground = new Schema(
    {
        name: { type: String, required: true },
        arcaneSkill: { type: String, required: true },
        attribute: { type: String, required: true },
        startingPowers: { type: Number, required: false },
        powerPoints: { type: Number, required: false },
        description: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('arcaneBackground', ArcaneBackground)