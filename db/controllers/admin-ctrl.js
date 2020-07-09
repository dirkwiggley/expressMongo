const DataTypes = require('../dataTypes')
const Campaign = require('../models/campaign-model')
const Genre = require('../models/genre-model')
const Dice = require('../models/dice-model')
const AttributeType = require('../models/attributeType-model')
const Rank = require('../models/rank-model')
const Hindrance = require('../models/hindrance-model')
const Edge = require('../models/edge-model')
const ArcaneBackground = require('../models/arcaneBackground-model')
const attrData = require('./data/attributeData')
const rankData = require('./data/rankData')
const hindranceData  = require('./data/hindranceData')
const edgeData = require('./data/edgeData')
const arcaneBackgroundData = require('./data/arcaneBackgroundData')

initDataTypes = (req, res) => {
    const bodyList = [
        { name: 'attribute' },
        { name: 'campaign' },
        { name: 'dice' },
        { name: 'genre' },
        { name: 'hindrance' },
        { name: 'rank' } ]

    let finalVal = false
    bodyList.map((body) => {
        if (body.name == 'rank')
            finalVal = true;
        saveDataTypes(res, body, finalVal)
    })
}

/**
 * I know this is wrong. It's working well enough for me 
 * to get back to it later.
 */
saveDataTypes = (res, body, finalVal) => {
    const dataType = new DataType(body)

    if (!dataType) {
        return res.status(400).json({ success: false, error: err })
    }

    dataType
        .save()
        .then(() => {
            if (finalVal) {
                return res.status(201).json({
                    success: true,
                    id: dataType._id,
                    message: 'DataTypes created!',
                })
            } else {
                return
            }
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'DataTypes not created!',
            })
        })
}

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
        { name: 'D4-2', min: 1, max: 2, ordinal: 0 },
        { name: 'D4-1', min: 1, max: 3, ordinal: 1 },
        { name: 'D4', min: 1, max: 4, ordinal: 2 },
        { name: 'D6', min: 1, max: 6, ordinal: 3 },
        { name: 'D8', min: 1, max: 8, ordinal: 4 },
        { name: 'D10', min: 1, max: 10, ordinal: 5 },
        { name: 'D12', min: 1, max: 12, ordinal: 6 },
        { name: 'D12+1', min: 2, max: 13, ordinal: 7 },
        { name: 'D12+2', min: 3, max: 14, ordinal: 8 } ]
        
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
    let finalVal = false

    attrData.getAttributes().map((body) => {
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
    let finalVal = false

    rankData.getRanks().map((body) => {
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

initHindrances = (req, res) => {
    let finalVal = false;

    hindranceData.getHindrances().map((body) => {
        if (body.name == 'Bloodthirsty') 
            finalVal = true;
        saveHindrances(res, body, finalVal)
    })

}

/**
 * I know this is wrong. It's working well enough for me 
 * to get back to it later.
 */
saveHindrances = (res, body, finalVal) => {
    const hindrance = new Hindrance(body)

    if (!hindrance) {
        return res.status(400).json({ success: false, error: err })
    }

    hindrance
        .save()
        .then(() => {
            if (finalVal) {
                return res.status(201).json({
                    success: true,
                    id: hindrance._id,
                    message: 'Hindrance created!',
                })
            } else {
                return
            }
        })
        .catch(error => {
            console.log('error', error)
            return res.status(400).json({
                error,
                message: 'Hindrance not created!',
            })
        })
}

initEdges = (req, res) => {
    let finalVal = false;

    edgeData.getEdges().map((body) => {
        if (body.name == 'Aristocrat') 
            finalVal = true;
        saveEdges(res, body, finalVal)
    })

}

/**
 * I know this is wrong. It's working well enough for me 
 * to get back to it later.
 */
saveEdges = (res, body, finalVal) => {
    const edge = new Edge(body)

    if (!edge) {
        return res.status(400).json({ success: false, error: err })
    }

    edge
        .save()
        .then(() => {
            if (finalVal) {
                return res.status(201).json({
                    success: true,
                    id: edge._id,
                    message: 'Edge created!',
                })
            } else {
                return
            }
        })
        .catch(error => {
            console.log('error', error)
            return res.status(400).json({
                error,
                message: 'Edge not created!',
            })
        })
}

initArcaneBackgrounds = (req, res) => {
    let finalVal = false;

    arcaneBackgroundData.getArcaneBackgrounds().map((body) => {
        if (body.name == DataTypes.ARCANE_BACKGROUND_TYPES.WEIRD_SCIENCE) 
            finalVal = true;
        saveArcaneBackgrounds(res, body, finalVal)
    })

}

/**
 * I know this is wrong. It's working well enough for me 
 * to get back to it later.
 */
saveArcaneBackgrounds = (res, body, finalVal) => {
    const arcaneBackground = new ArcaneBackground(body)

    if (!arcaneBackground) {
        return res.status(400).json({ success: false, error: err })
    }

    arcaneBackground
        .save()
        .then(() => {
            if (finalVal) {
                return res.status(201).json({
                    success: true,
                    id: arcaneBackground._id,
                    message: 'Arcane Background created!',
                })
            } else {
                return
            }
        })
        .catch(error => {
            console.log('error', error)
            return res.status(400).json({
                error,
                message: 'Arcane Background not created!',
            })
        })
}

module.exports = {
    initCampaigns,
    initDice,
    initGenres,
    initAttributeTypes,
    initRanks,
    initHindrances,
    initEdges,
    initArcaneBackgrounds
}