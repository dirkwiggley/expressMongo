const express = require('express')

const HindranceCtrl = require('../controllers/hindrance-ctrl')

const router = express.Router()

router.post('/hindrance', HindranceCtrl.insertHindrance)
router.put('/hindrance/:id', HindranceCtrl.updateHindrance)
router.delete('/hindrance/:id', HindranceCtrl.deleteHindrance)
router.get('/hindrance/:id', HindranceCtrl.getHindranceById)
router.get('/hindrance', HindranceCtrl.getHindrance)

module.exports = router