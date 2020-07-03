const Campaign = require('../models/campaign-model')
const Genre = require('../models/genre-model')
const Dice = require('../models/dice-model')
const AttributeType = require('../models/attributeType-model')
const Rank = require('../models/rank-model')

initCampaigns = (req, res) => {
    const body = {name: 'Generic', gms: [{gmId: 'Tim'}, {gmId: 'Rob'}] }

    const campaign = new Campaign(body)

    if (!campaign) {
        return res.status(400).json({ success: false, error: err })
    }

    campaign
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: campaign._id,
                message: 'Campaign created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Campaign not created!',
            })
        })
}

/**
 * I know this is wrong. It's working well enough for me 
 * to get back to it later.
 */
saveCampaigns = (res, body, finalVal) => {
    const campaign = new Genre(body)

    if (!campaign) {
        return res.status(400).json({ success: false, error: err })
    }

    campaign
        .save()
        .then(() => {
            if (finalVal) {
                return res.status(201).json({
                    success: true,
                    id: campaign._id,
                    message: 'Campaigns created!',
                })
            } else {
                return
            }
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Campaigns not created!',
            })
        })
}

initGenres = (req, res) => {
    const bodyList = [{ name: 'Generic' },
        { name: 'Fantasy' },
        { name: 'Scifi' },
        { name: 'Cyberpunk' },
        { name: 'Steampunk' },
        { name: 'Horror' },
        { name: 'Modern' },
        { name: 'Post apocalyptic'} ]

    let finalVal = false
    bodyList.map((body) => {
        if (body.name == 'Post apocalyptic')
            finalVal = true;
        saveGenres(res, body, finalVal)
    })

}

/**
 * I know this is wrong. It's working well enough for me 
 * to get back to it later.
 */
saveGenres = (res, body, finalVal) => {
    const genre = new Genre(body)

    if (!genre) {
        return res.status(400).json({ success: false, error: err })
    }

    genre
        .save()
        .then(() => {
            if (finalVal) {
                return res.status(201).json({
                    success: true,
                    id: genre._id,
                    message: 'Genres created!',
                })
            } else {
                return
            }
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Genres not created!',
            })
        })
}

initDice = (req, res) => {
    const bodyList = [
        { name: 'D4', min: 1, max: 4, ordinal: 0 },
        { name: 'D6', min: 1, max: 6, ordinal: 1 },
        { name: 'D8', min: 1, max: 8, ordinal: 2 },
        { name: 'D10', min: 1, max: 10, ordinal: 3 },
        { name: 'D12', min: 1, max: 12, ordinal: 4 },
        { name: 'D12+1', min: 2, max: 13, ordinal: 5 },
        { name: 'D12+2', min: 3, max: 14, ordinal: 6 } ]
        
    let finalVal = false;

    bodyList.map((body) => {
        if (body.name == 'D12+2') 
            finalVal = true;
        saveDice(res, body, finalVal)
    })

}

/**
 * I know this is wrong. It's working well enough for me 
 * to get back to it later.
 */
saveDice = (res, body, finalVal) => {
    const dice = new Dice(body)

    if (!dice) {
        return res.status(400).json({ success: false, error: err })
    }

    dice
        .save()
        .then(() => {
            if (finalVal) {
                return res.status(201).json({
                    success: true,
                    id: dice._id,
                    message: 'Dice created!',
                })
            } else {
                return
            }
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Dice not created!',
            })
        })
}

initAttributeTypes = (req, res) => {
    const bodyList = [
        { name: 'Agility', abbreviation: 'AGI', description: 
            "Agility is a measure of a characters nimbleness, dexterity and general coordination", 
            ordinal: 0 },
        { name: 'Smarts', abbreviation: 'SMA', description: 
            "Smarts measures raw intelligence, mental acuity, and how fast a heroine thinks on her feet. It's used to resist certain types of mental and social attacks.", 
            ordinal: 1 },
        { name: 'Spirit', abbreviation: 'SPI', description: 
            "Spirit is self-confidence, backbone, and willpower. It is used to resist supernatural attacks as well as fear", 
            ordinal: 2 },
        { name: 'Strength', abbreviation: 'STR', description: 
            "Strength is physical power and fitness. It's also used as the basis for a warrior's damage in hand-to-hand combat, and to determine how much he can wear or carry.", 
            ordinal: 3 },
        { name: 'Vigour', abbreviation: 'VIG', description: 
            "Vigour represents an individuals endurance, resistance to disease, poisons, or toxins, and how much physical damage she can take before she can't go on. It is most often used to resist fatigue effects, and as the basis for the derived stat of Toughness.", 
            ordinal: 4 }
        ]
        
    let finalVal = false;

    bodyList.map((body) => {
        if (body.name == 'Vigour') 
            finalVal = true;
        saveAttributeTypes(res, body, finalVal)
    })

}

/**
 * I know this is wrong. It's working well enough for me 
 * to get back to it later.
 */
saveAttributeTypes = (res, body, finalVal) => {
    const attributeType = new AttributeType(body)

    if (!attributeType) {
        return res.status(400).json({ success: false, error: err })
    }

    attributeType
        .save()
        .then(() => {
            if (finalVal) {
                return res.status(201).json({
                    success: true,
                    id: attributeType._id,
                    message: 'AttributeType created!',
                })
            } else {
                return
            }
        })
        .catch(error => {
            console.log('error', error)
            return res.status(400).json({
                error,
                message: 'AttributeType not created!',
            })
        })
}

initRanks = (req, res) => {
    const bodyList = [
        { name: 'Novice', min: 0, max: 3, ordinal: 0 },
        { name: 'Seasoned', min: 4, max: 7, ordinal: 1 },
        { name: 'Veteran', min: 8, max: 11, ordinal: 2 },
        { name: 'Heroic', min: 12, max: 15, ordinal: 3 },
        { name: 'Legendary', min: 16, max: 1000, ordinal: 4 }]
        
    let finalVal = false;

    bodyList.map((body) => {
        if (body.ordinal == 4) 
            finalVal = true;
        saveRanks(res, body, finalVal)
    })

}

/**
 * I know this is wrong. It's working well enough for me 
 * to get back to it later.
 */
saveRanks = (res, body, finalVal) => {
    const rank = new Rank(body)

    if (!rank) {
        return res.status(400).json({ success: false, error: err })
    }

    rank
        .save()
        .then(() => {
            if (finalVal) {
                return res.status(201).json({
                    success: true,
                    id: rank._id,
                    message: 'Rank created!',
                })
            } else {
                return
            }
        })
        .catch(error => {
            console.log('error', error)
            return res.status(400).json({
                error,
                message: 'Rank not created!',
            })
        })
}

module.exports = {
    initCampaigns,
    initDice,
    initGenres,
    initAttributeTypes,
    initRanks
}