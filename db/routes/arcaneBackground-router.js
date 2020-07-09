const express = require('express')

const ArcaneBackgroundCtrl = require('../controllers/arcaneBackground-ctrl')

const router = express.Router()

router.post('/arcaneBackground', ArcaneBackgroundCtrl.insertArcaneBackground)
router.put('/arcaneBackground/:id', ArcaneBackgroundCtrl.updateArcaneBackground)
router.delete('/arcaneBackground/:id', ArcaneBackgroundCtrl.deleteArcaneBackground)
router.get('/arcaneBackground/:id', ArcaneBackgroundCtrl.getArcaneBackgroundById)
router.get('/arcaneBackground', ArcaneBackgroundCtrl.getArcaneBackground)

module.exports = router