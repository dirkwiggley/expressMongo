const express = require('express')

const RankCtrl = require('../controllers/rank-ctrl')

const router = express.Router()

router.post('/rank', RankCtrl.insertRank)
router.put('/rank/:id', RankCtrl.updateRank)
router.delete('/rank/:id', RankCtrl.deleteRank)
router.get('/rank/:id', RankCtrl.getRankById)
router.get('/rank', RankCtrl.getRanks)

module.exports = router