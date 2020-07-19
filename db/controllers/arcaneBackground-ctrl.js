const ArcaneBackground = require('../models/arcaneBackground-model')

insertArcaneBackground = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a arcaneBackground',
        })
    }

    const arcaneBackground = new ArcaneBackground(body)

    if (!arcaneBackground) {
        return res.status(400).json({ success: false, error: err })
    }

    arcaneBackground
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: arcaneBackground._id,
                message: 'ArcaneBackground created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'ArcaneBackground not created!',
            })
        })
}

updateArcaneBackground = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    ArcaneBackground.findOne({ _id: req.params.id }, (err, arcaneBackground) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Arcane Background not found!',
            })
        }
        arcaneBackground.name = body.name
        // arcaneBackground.time = body.time
        // arcaneBackground.rating = body.rating
        arcaneBackground
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: arcaneBackground._id,
                    message: 'Arcane Background updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Arcane Background not updated!',
                })
            })
    })
}

deleteArcaneBackground = async (req, res) => {
    await ArcaneBackground.findOneAndDelete({ _id: req.params.id }, (err, arcaneBackground) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!arcaneBackground) {
            return res
                .status(404)
                .json({ success: false, error: `Arcane Background not found` })
        }

        return res.status(200).json({ success: true, data: arcaneBackground })
    }).catch(err => console.log(err))
}

getArcaneBackgroundById = async (req, res) => {
    await ArcaneBackground.findOne({ _id: req.params.id }, (err, arcaneBackground) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!arcaneBackground) {
            return res
                .status(404)
                .json({ success: false, error: `Arcane Background not found` })
        }
        return res.status(200).json({ success: true, data: arcaneBackground })
    }).catch(err => console.log(err))
}

getArcaneBackground = async (req, res) => {
    const byOrdinal = { ordinal: 1 }
    await ArcaneBackground.find({}, (err, arcaneBackground) => {
        result = arcaneBackground;
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!arcaneBackground.length) {
            return res
                .status(404)
                .json({ success: false, error: `Arcane Background not found` })
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
    insertArcaneBackground,
    updateArcaneBackground,
    deleteArcaneBackground,
    getArcaneBackground,
    getArcaneBackgroundById
}