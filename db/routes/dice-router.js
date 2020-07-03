const express = require('express')

const DiceCtrl = require('../controllers/dice-ctrl')

const router = express.Router()

router.post('/dice', DiceCtrl.insertDice)
router.put('/dice/:id', DiceCtrl.updateDice)
router.delete('/dice/:id', DiceCtrl.deleteDice)
router.get('/dice/:id', DiceCtrl.getDiceById)
router.get('/dice', DiceCtrl.getDice)

module.exports = router