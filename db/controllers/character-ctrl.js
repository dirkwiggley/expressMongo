const Character = require('../models/character-model')

insertCharacter = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a character',
        })
    }

    const character = new Character(body)

    if (!character) {
        return res.status(400).json({ success: false, error: err })
    }

    character
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: character._id,
                message: 'Character created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Character not created!',
            })
        })
}

updateCharacter = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Character.replaceOne({ _id: req.params.id}, body, (error, character) => {
        if (error) {
            return res.status(404).json({
                error,
                message: 'Character not updated!',
            })
        } else {
            return res.status(200).json({
                success: true,
                message: character,
            })
        }
    })
}

deleteCharacter = async (req, res) => {
    await Character.findOneAndDelete({ _id: req.params.id }, (err, character) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!character) {
            return res
                .status(404)
                .json({ success: false, error: `Character not found` })
        }

        return res.status(200).json({ success: true, data: character })
    }).catch(err => console.log(err))
}

getCharacterById = async (req, res) => {
    await Character.findOne({ _id: req.params.id }, (err, character) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!character) {
            return res
                .status(404)
                .json({ success: false, error: `Character not found` })
        }
        return res.status(200).json({ success: true, character: character })
    }).catch(err => console.log(err))
}

getCharactersByCampaign = async (req, res) => {
    await Character.find({ campaignId: req.params.id, ownerId: req.params.ownerId }, (err, characters) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!characters.length) {
            return res
                .status(404)
                .json({ success: false, error: `Character not found` })
        }
        return res.status(200).json({ success: true, data: characters })
    }).catch(err => console.log(err))
}

getAllCharsByCampaign = async (req, res) => {
    await Character.find({ campaignId: req.params.id }, (err, characters) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!characters.length) {
            return res
                .status(550)
                .json({ success: false, error: `Character not found` })
        }

        let charList = [];
        for (const { ownerId: ownerId, ownerNickname: ownerNickname, _id: characterId, name: name} of characters) {
            charList.push( { ownerId: ownerId, ownerNickname: ownerNickname, characterId: characterId, name: name } );
        }

        return res.status(200).json({ success: true, characters: charList })
    }).catch(err => console.log(err))
}

module.exports = {
    insertCharacter,
    updateCharacter,
    deleteCharacter,
    getCharactersByCampaign,
    getAllCharsByCampaign,
    getCharacterById,
}