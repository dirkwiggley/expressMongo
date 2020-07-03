const Campaign = require('../models/campaign-model')
const Genre = require('../models/genre-model')
const Dice = require('../models/dice-model')

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
            console.log(body, finalVal)
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
            console.log(error)
            return res.status(400).json({
                error,
                message: 'Genres not created!',
            })
        })
}

initDice = (req, res) => {
    const bodyList = [{ name: 'D4', min: '1', max: '4' },
        {name: 'D6', min: '1', max: '6'},
        {name: 'D8', min: '1', max: '8'},
        {name: 'D10', min: '1', max: '10'},
        {name: 'D12', min: '1', max: '12'},
        {name: 'D12+1', min: '2', max: '13'},
        {name: 'D12+2', min: '3', max: '14'} ]
        
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
            console.log(error)
            return res.status(400).json({
                error,
                message: 'Dice not created!',
            })
        })
}

module.exports = {
    initCampaigns,
    initDice,
    initGenres
}