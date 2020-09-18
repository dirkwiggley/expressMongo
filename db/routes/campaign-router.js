const express = require('express')

const CampaignCtrl = require('../controllers/campaign-ctrl')

const router = express.Router()

router.post('/campaign', CampaignCtrl.insertCampaign)
router.put('/campaign/:id', CampaignCtrl.updateCampaign)
router.delete('/campaign/:id', CampaignCtrl.deleteCampaign)
router.get('/campaign/:id', CampaignCtrl.getCampaignById)
router.get('/campaigns', CampaignCtrl.getCampaigns)

module.exports = router