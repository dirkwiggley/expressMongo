const Power = require('../models/power-model')

insertPower = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a power',
        })
    }

    const power = new Power(body)

    if (!power) {
        return res.status(400).json({ success: false, error: err })
    }

    power
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: power._id,
                message: 'Power created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Power not created!',
            })
        })
}

updatePower = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Power.replaceOne({ _id: req.params.id}, body, (error, power) => {
        if (error) {
            return res.status(404).json({
                error,
                message: 'Power not updated!',
            })
        } else {
            return res.status(200).json({
                success: true,
                message: power,
            })
        }
    })
}

deletePower = async (req, res) => {
    await Power.findOneAndDelete({ _id: req.params.id }, (err, power) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!power) {
            return res
                .status(404)
                .json({ success: false, error: `Power not found` })
        }

        return res.status(200).json({ success: true, data: power })
    }).catch(err => console.log(err))
}

getPowerById = async (req, res) => {
    await Power.findOne({ _id: req.params.id }, (err, power) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!power) {
            return res
                .status(404)
                .json({ success: false, error: `Power not found` })
        }
        return res.status(200).json({ success: true, power: power })
    }).catch(err => console.log(err))
}

getPower = async (req, res) => {
    await Power.find({}, (err, power) => {
        result = power;
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!power.length) {
            return res
                .status(404)
                .json({ success: false, error: `Power not found` })
        }
    }).sort().exec(function(err, result) {
        if (err) {
            console.log(err)
            return res.status(400).json({ success: false, error: err })
        }
        return res.status(200).json({ success: true, powers: result })
    })
}

module.exports = {
    insertPower,
    updatePower,
    deletePower,
    getPower,
    getPowerById
}