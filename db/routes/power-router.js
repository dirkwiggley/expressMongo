const express = require('express')

const PowerCtrl = require('../controllers/power-ctrl')

const router = express.Router()

router.post('/power', PowerCtrl.insertPower)
router.put('/power/:id', PowerCtrl.updatePower)
router.delete('/power/:id', PowerCtrl.deletePower)
router.get('/power/:id', PowerCtrl.getPowerById)
router.get('/power', PowerCtrl.getPowers)

module.exports = router