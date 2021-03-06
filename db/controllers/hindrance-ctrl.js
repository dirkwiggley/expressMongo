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

    Hindrance.replaceOne({ _id: req.params.id}, body, (error, data) => {
        if (error) {
            return res.status(404).json({
                error,
                message: 'Hindrance not updated!',
            })
        } else {
            return res.status(200).json({
                success: true,
                message: data,
            })
        }
    })
}

deleteHindrance = async (req, res) => {
    await Hindrance.findOneAndDelete({ _id: req.params.id }, (err, data) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!hindrance) {
            return res
                .status(404)
                .json({ success: false, error: `Hindrance not found` })
        }

        return res.status(200).json({ success: true, message: data })
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
        return res.status(200).json({ success: true, hindrance: hindrance })
    }).catch(err => console.log(err))
}

getHindrances = async (req, res) => {
    const byOrdinal = { ordinal: 1 }
    await Hindrance.find({}, (err, hindrance) => {
        result = hindrance
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
            return res.status(400).json({ success: false, error: err })
        }
        return res.status(200).json({ success: true, hindrances: result })
    })
}

module.exports = {
    insertHindrance,
    updateHindrance,
    deleteHindrance,
    getHindrances,
    getHindranceById
}