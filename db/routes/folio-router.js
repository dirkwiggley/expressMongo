const express = require('express')

const FolioCtrl = require('../controllers/folio-ctrl')

const router = express.Router()

router.post('/folio', FolioCtrl.insertFolio)
router.put('/folio/:id', FolioCtrl.updateFolio)
router.delete('/folio/:id', FolioCtrl.deleteFolio)
router.get('/folio/:id', FolioCtrl.getFolioById)
router.get('/folios/campaign/:id/user/:userId', FolioCtrl.getFoliosByCampaignId)
router.get('/folio', FolioCtrl.getFolio)

module.exports = router