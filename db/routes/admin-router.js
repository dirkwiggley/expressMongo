const express = require('express')

const AdminCtrl = require('../controllers/admin-ctrl')

const router = express.Router()

router.get('/admin/init-campaigns', AdminCtrl.initCampaigns)
router.get('/admin/init-dice', AdminCtrl.initDice)
router.get('/admin/init-genres', AdminCtrl.initGenres)
router.get('/admin/init-attributeTypes', AdminCtrl.initAttributeTypes)
router.get('/admin/init-ranks', AdminCtrl.initRanks)
router.get('/admin/init-hindrances', AdminCtrl.initHindrances)
router.get('/admin/init-edges', AdminCtrl.initEdges)
router.get('/admin/init-arcaneBackgrounds', AdminCtrl.initArcaneBackgrounds)
router.get('/admin/init-abilities', AdminCtrl.initAbilities)
router.get('/admin/init-races', AdminCtrl.initRaces)
router.get('/admin/init-skills', AdminCtrl.initSkills)
router.get('/admin/init-powers', AdminCtrl.initPowers)
router.get('/admin/init-characters', AdminCtrl.initCharacters)
router.get('/admin/init-users', AdminCtrl.initUsers)
router.get('/admin/updateIds', AdminCtrl.updateIds)

module.exports = router