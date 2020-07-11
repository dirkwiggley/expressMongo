const Rank = require('../models/rank-model')

insertRank = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a rank',
        })
    }

    const rank = new Rank(body)

    if (!rank) {
        return res.status(400).json({ success: false, error: err })
    }

    rank
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: rank._id,
                message: 'Rank created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Rank not created!',
            })
        })
}

updateRank = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Rank.findOne({ _id: req.params.id }, (err, rank) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Rank not found!',
            })
        }
        rank.name = body.name
        // rank.time = body.time
        // rank.rating = body.rating
        rank
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: rank._id,
                    message: 'Rank updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Rank not updated!',
                })
            })
    })
}

deleteRank = async (req, res) => {
    await Rank.findOneAndDelete({ _id: req.params.id }, (err, rank) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!rank) {
            return res
                .status(404)
                .json({ success: false, error: `Rank not found` })
        }

        return res.status(200).json({ success: true, data: rank })
    }).catch(err => console.log(err))
}

getRankById = async (req, res) => {
    await Rank.findOne({ _id: req.params.id }, (err, rank) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!rank) {
            return res
                .status(404)
                .json({ success: false, error: `Rank not found` })
        }
        return res.status(200).json({ success: true, data: rank })
    }).catch(err => console.log(err))
}

getRank = async (req, res) => {
    const byOrdinal = { ordinal: 1}
    await Rank.find({}, (err, rank) => {
        result = rank;
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!rank.length) {
            return res
                .status(404)
                .json({ success: false, error: `Rank not found` })
        }
    }).sort(byOrdinal).exec(function(err, result) {
        if (err) {
            console.log(err)
            return res.status(400).json({ success: false, error: err })
        }
        return res.status(200).json({ success: true, data: result })
    })
}

module.exports = {
    insertRank,
    updateRank,
    deleteRank,
    getRank,
    getRankById
}