const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        login: { type: String, required: true },
        password: { type: String, required: true},
        name: { type: String, required: true },
        nickname: { type: String, required: true },
        email: { type: String, required: false },
        campaignsPlayer: [ { id: { type: String, required: false } } ],
        campaignsGM: [ { id: { type: String, required: false } } ],
        privileges: [ { id: { type: String, required: true } } ],
        token: { id: { type: String, required: false }, issued: { type: Number, required: false }, expires: { type: Number, required: false } }
    },
    { timestamps: true },
)

module.exports = mongoose.model('user', User)