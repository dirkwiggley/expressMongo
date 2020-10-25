const Race = require('../models/race-model')

insertRace = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a race',
        })
    }

    const race = new Race(body)

    if (!race) {
        return res.status(400).json({ success: false, error: err })
    }

    race
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: race._id,
                message: 'Race created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Race not created!',
            })
        })
}

updateRace = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Race.replaceOne({ _id: req.params.id}, body, (error, data) => {
        if (error) {
            return res.status(404).json({
                error,
                message: 'Race not updated!',
            })
        } else {
            return res.status(200).json({
                success: true,
                message: data,
            })
        }
    })
}

deleteRace = async (req, res) => {
    await Race.findOneAndDelete({ _id: req.params.id }, (err, data) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!race) {
            return res
                .status(404)
                .json({ success: false, error: `Race not found` })
        }

        return res.status(200).json({ success: true, message: data })
    }).catch(err => console.log(err))
}

getRaceById = async (req, res) => {
    await Race.findOne({ _id: req.params.id }, (err, race) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!race) {
            return res
                .status(404)
                .json({ success: false, error: `Race not found` })
        }
        return res.status(200).json({ success: true, race: race })
    }).catch(err => console.log(err))
}

getRaces = async (req, res) => {
    const byName = { name: 1}
    await Race.find({}, (err, result) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!result.length) {
            return res
                .status(404)
                .json({ success: false, error: `Race not found` })
        }
    }).sort(byName).exec(function(err, result) {
        if (err) {
            console.log(err)
            return res.status(400).json({ success: false, error: err })
        }
        return res.status(200).json({ success: true, races: result })
    })
}

module.exports = {
    insertRace,
    updateRace,
    deleteRace,
    getRaces,
    getRaceById
}