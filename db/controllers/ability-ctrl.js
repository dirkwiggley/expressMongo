const Ability = require('../models/ability-model')

insertAbility = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an ability',
        })
    }

    const ability = new Ability(body)

    if (!ability) {
        return res.status(400).json({ success: false, error: err })
    }

    ability
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: ability._id,
                message: 'Ability created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Ability not created!',
            })
        })
}

updateAbility = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Ability.replaceOne({ _id: req.params.id}, body, (error, ability) => {
        if (error) {
            return res.status(404).json({
                error,
                message: 'Ability not updated!',
            })
        } else {
            return res.status(200).json({
                success: true,
                message: ability,
            })
        }
    })
}

deleteAbility = async (req, res) => {
    await Ability.findOneAndDelete({ _id: req.params.id }, (err, ability) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!ability) {
            return res
                .status(404)
                .json({ success: false, error: `Ability not found` })
        }

        return res.status(200).json({ success: true, data: ability })
    }).catch(err => console.log(err))
}

getAbilityById = async (req, res) => {
    await Ability.findOne({ _id: req.params.id }, (err, ability) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!ability) {
            return res
                .status(404)
                .json({ success: false, error: `Ability not found` })
        }
        return res.status(200).json({ success: true, data: ability })
    }).catch(err => console.log(err))
}

getAbility = async (req, res) => {
    const byName = { name: 1 }
    await Ability.find({}, (err, ability) => {
        result = ability
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!ability.length) {
            return res
                .status(404)
                .json({ success: false, error: `Ability not found` })
        }
    }).sort(byName).exec(function(err, result) {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        return res.status(200).json({ success: true, data: result })
    })
}

module.exports = {
    insertAbility,
    updateAbility,
    deleteAbility,
    getAbility,
    getAbilityById
}