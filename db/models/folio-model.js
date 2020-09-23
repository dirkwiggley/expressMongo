const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Folio = new Schema(
    {
        campaignid: { type: String, required: true},
        title: { type: String, required: true },
        contents: { type: String, required: true },
        owner: { 
            id: { type: String, required: false }, 
            login: { type: String, required: true }, 
            nickname: { type: String, required: true } },
        read: [ { 
            id: { type: String, required: false }, 
            login: { type: String, required: false }, 
            nickname: { type: String, required: false } } ],
        write: [ { 
            id: { type: String, required: false }, 
            login: { type: String, required: false }, 
            nickname: { type: String, required: false } } ]
        },
    { timestamps: true },
)

module.exports = mongoose.model('folio', Folio)