const express = require('express')

const CharacterCtrl = require('../controllers/character-ctrl')

const router = express.Router()

router.post('/character', CharacterCtrl.insertCharacter)
router.put('/character/:id', CharacterCtrl.updateCharacter)
router.delete('/character/:id', CharacterCtrl.deleteCharacter)
router.get('/character/:id', CharacterCtrl.getCharacterById)
router.get('/character', CharacterCtrl.getAllCharacters)

module.exports = router