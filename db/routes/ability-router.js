const express = require('express')

const AbilityCtrl = require('../controllers/ability-ctrl')

const router = express.Router()

router.post('/ability', AbilityCtrl.insertAbility)
router.put('/ability/:id', AbilityCtrl.updateAbility)
router.delete('/ability/:id', AbilityCtrl.deleteAbility)
router.get('/ability/:id', AbilityCtrl.getAbilityById)
router.get('/ability', AbilityCtrl.getAbilities)

module.exports = router