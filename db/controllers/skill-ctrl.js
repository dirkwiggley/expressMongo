const Skill = require('../models/skill-model')

insertSkill = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a skill',
        })
    }

    const skill = new Skill(body)

    if (!skill) {
        return res.status(400).json({ success: false, error: err })
    }

    skill
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: skill._id,
                message: 'Skill created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Skill not created!',
            })
        })
}

updateSkill = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Skill.replaceOne({ _id: req.params.id}, body, (error, data) => {
        if (error) {
            return res.status(404).json({
                error,
                message: 'Skill not updated!',
            })
        } else {
            return res.status(200).json({
                success: true,
                message: data,
            })
        }
    });
}

deleteSkill = async (req, res) => {
    await Skill.findOneAndDelete({ _id: req.params.id }, (err, data) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!skill) {
            return res
                .status(404)
                .json({ success: false, error: `Skill not found` })
        }

        return res.status(200).json({ success: true, message: data })
    }).catch(err => console.log(err))
}

getSkillById = async (req, res) => {
    await Skill.findOne({ _id: req.params.id }, (err, skill) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!skill) {
            return res
                .status(404)
                .json({ success: false, error: `Skill not found` })
        }
        return res.status(200).json({ success: true, skill: skill })
    }).catch(err => console.log(err))
}

getSkills = async (req, res) => {
    const byOrdinal = { ordinal: 1}
    await Skill.find({}, (err, skill) => {
        result = skill;
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!skill.length) {
            return res
                .status(404)
                .json({ success: false, error: `Skill not found` })
        }
    }).sort(byOrdinal).exec(function(err, result) {
        if (err) {
            console.log(err)
            return res.status(400).json({ success: false, error: err })
        }
        return res.status(200).json({ success: true, skills: result })
    })
}

module.exports = {
    insertSkill,
    updateSkill,
    deleteSkill,
    getSkills,
    getSkillById
}