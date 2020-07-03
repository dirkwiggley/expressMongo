const express = require('express')

const AttributeTypeCtrl = require('../controllers/attributeType-ctrl')

const router = express.Router()

router.post('/attributeType', AttributeTypeCtrl.insertAttributeType)
router.put('/attributeType/:id', AttributeTypeCtrl.updateAttributeType)
router.delete('/attributeType/:id', AttributeTypeCtrl.deleteAttributeType)
router.get('/attributeType/:id', AttributeTypeCtrl.getAttributeTypeById)
router.get('/attributeType', AttributeTypeCtrl.getAttributeType)

module.exports = router