const express = require('express')

const RaceCtrl = require('../controllers/race-ctrl')

const router = express.Router()

router.post('/race', RaceCtrl.insertRace)
router.put('/race/:id', RaceCtrl.updateRace)
router.delete('/race/:id', RaceCtrl.deleteRace)
router.get('/race/:id', RaceCtrl.getRaceById)
router.get('/race', RaceCtrl.getRaces)

module.exports = router