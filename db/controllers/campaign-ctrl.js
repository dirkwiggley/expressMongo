const Campaign = require('../models/campaign-model')

insertCampaign = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a campaign',
        })
    }

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

updateCampaign = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Campaign.findOneAndUpdate({ _id: req.params.id}, body, (error, campaign) => {
        if (error) {
            return res.status(404).json({
                error,
                message: 'Campaign not updated!',
            })
        } else {
            return res.status(200).json({
                success: true,
                id: campaign._id,
                message: 'Campaign updated!',
            })
        }
    })    
}

deleteCampaign = async (req, res) => {
    await Campaign.findOneAndDelete({ _id: req.params.id }, (err, campaign) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!campaign) {
            return res
                .status(404)
                .json({ success: false, error: `Campaign not found` })
        }

        return res.status(200).json({ success: true, data: campaign })
    }).catch(err => console.log(err))
}

getCampaignById = async (req, res) => {
    await Campaign.findOne({ _id: req.params.id }, (err, campaign) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!campaign) {
            return res
                .status(404)
                .json({ success: false, error: `Campaign not found` })
        }
        return res.status(200).json({ success: true, campaign: campaign })
    }).catch(err => console.log(err))
}

getCampaigns = async (req, res) => {
    await Campaign.find({}, (err, campaigns) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!campaigns.length) {
            return res
                .status(404)
                .json({ success: false, error: `Campaign not found` })
        }
        return res.status(200).json({ success: true, campaigns: campaigns })
    }).catch(err => console.log(err))
}

module.exports = {
    insertCampaign,
    updateCampaign,
    deleteCampaign,
    getCampaigns,
    getCampaignById,
}