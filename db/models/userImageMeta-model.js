const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserImageMeta = new Schema(
    {
        userId: { type: String, required: true }, 
        userLogin: { type: String, required: true },
        userName: { type: String, required: true },
        userNickname: { type: String, required: true },
        src: { type: String, required: true },
        name: { type: String, required: true },
        alt: { type: String, required: true },
        tag: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('userImageMeta', UserImageMeta)