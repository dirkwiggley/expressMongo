const Hindrance = require('../models/hindrance-model')

insertHindrance = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a hindrance',
        })
    }

    const hindrance = new Hindrance(body)

    if (!hindrance) {
        return res.status(400).json({ success: false, error: err })
    }

    hindrance
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: hindrance._id,
                message: 'Hindrance created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Hindrance not created!',
            })
        })
}

updateHindrance = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Hindrance.findOne({ _id: req.params.id }, (err, hindrance) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Hindrance not found!',
            })
        }
        hindrance.name = body.name
        // hindrance.time = body.time
        // hindrance.rating = body.rating
        hindrance
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: hindrance._id,
                    message: 'Hindrance updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Hindrance not updated!',
                })
            })
    })
}

deleteHindrance = async (req, res) => {
    await Hindrance.findOneAndDelete({ _id: req.params.id }, (err, hindrance) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!hindrance) {
            return res
                .status(404)
                .json({ success: false, error: `Hindrance not found` })
        }

        return res.status(200).json({ success: true, data: hindrance })
    }).catch(err => console.log(err))
}

getHindranceById = async (req, res) => {
    await Hindrance.findOne({ _id: req.params.id }, (err, hindrance) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!hindrance) {
            return res
                .status(404)
                .json({ success: false, error: `Hindrance not found` })
        }
        return res.status(200).json({ success: true, data: hindrance })
    }).catch(err => console.log(err))
}

getHindrance = async (req, res) => {
    const byOrdinal = { ordinal: 1}
    await Hindrance.find({}, (err, hindrance) => {
        result = hindrance;
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!hindrance.length) {
            return res
                .status(404)
                .json({ success: false, error: `Hindrance not found` })
        }
    }).sort(byOrdinal).exec(function(err, result) {
        if (err) {
            console.log(err)
            return res.status(400).json({ success: false, error: err })
        }
        return res.status(200).json({ success: true, data: result })
    }).catch()
}

module.exports = {
    insertHindrance,
    updateHindrance,
    deleteHindrance,
    getHindrance,
    getHindranceById
}