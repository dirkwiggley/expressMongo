const express = require('express')

const EdgeCtrl = require('../controllers/edge-ctrl')

const router = express.Router()

router.post('/edge', EdgeCtrl.insertEdge)
router.put('/edge/:id', EdgeCtrl.updateEdge)
router.delete('/edge/:id', EdgeCtrl.deleteEdge)
router.get('/edge/:id', EdgeCtrl.getEdgeById)
router.get('/edge', EdgeCtrl.getEdge)

module.exports = router