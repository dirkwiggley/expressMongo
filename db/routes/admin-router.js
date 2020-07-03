const express = require('express')

const AdminCtrl = require('../controllers/admin-ctrl')

const router = express.Router()

router.get('/admin/init-campaigns', AdminCtrl.initCampaigns)
router.get('/admin/init-dice', AdminCtrl.initDice)
router.get('/admin/init-genres', AdminCtrl.initGenres)
router.get('/admin/init-attributeTypes', AdminCtrl.initAttributeTypes)
router.get('/admin/init-ranks', AdminCtrl.initRanks)

module.exports = router