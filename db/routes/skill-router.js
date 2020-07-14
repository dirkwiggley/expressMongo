const express = require('express')

const SkillCtrl = require('../controllers/skill-ctrl')

const router = express.Router()

router.post('/skill', SkillCtrl.insertSkill)
router.put('/skill/:id', SkillCtrl.updateSkill)
router.delete('/skill/:id', SkillCtrl.deleteSkill)
router.get('/skill/:id', SkillCtrl.getSkillById)
router.get('/skill', SkillCtrl.getSkill)

module.exports = router