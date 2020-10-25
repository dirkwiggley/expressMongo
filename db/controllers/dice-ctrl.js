const Dice = require('../models/dice-model')

insertDice = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a dice',
        })
    }

    const dice = new Dice(body)

    if (!dice) {
        return res.status(400).json({ success: false, error: err })
    }

    dice
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: dice._id,
                message: 'Dice created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Dice not created!',
            })
        })
}

updateDice = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Dice.replaceOne({ _id: req.params.id}, body, (error, message) => {
        if (error) {
            return res.status(404).json({
                error,
                message: 'Dice not updated!',
            })
        } else {
            return res.status(200).json({
                success: true,
                message: message,
            })
        }
    })
}

deleteDice = async (req, res) => {
    await Dice.findOneAndDelete({ _id: req.params.id }, (err, dice) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!dice) {
            return res
                .status(404)
                .json({ success: false, error: `Dice not found` })
        }

        return res.status(200).json({ success: true })
    }).catch(err => console.log(err))
}

getDiceById = async (req, res) => {
    await Dice.findOne({ _id: req.params.id }, (err, dice) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!dice) {
            return res
                .status(404)
                .json({ success: false, error: `Dice not found` })
        }
        return res.status(200).json({ success: true, dice: dice })
    }).catch(err => console.log(err))
}

getDice = async (req, res) => {
    const byOrdinal = { ordinal: 1}
    await Dice.find({}, (err, dice) => {
        result = dice;
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!dice.length) {
            return res
                .status(404)
                .json({ success: false, error: `Dice not found` })
        }
    }).sort(byOrdinal).exec(function(err, result) {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        return res.status(200).json({ success: true, dice: result })
    })
}

module.exports = {
    insertDice,
    updateDice,
    deleteDice,
    getDice,
    getDiceById
}