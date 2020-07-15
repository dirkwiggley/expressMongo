const express = require('express')

const UserCtrl = require('../controllers/user-ctrl')

const router = express.Router()

router.post('/user', UserCtrl.insertUser)
router.put('/user/:id', UserCtrl.updateUser)
router.delete('/user/:id', UserCtrl.deleteUser)
router.get('/user/:id', UserCtrl.getUserById)
router.get('/user', UserCtrl.getAllUsers)
router.post('/user/login', UserCtrl.login)
router.post('/user/checkToken', UserCtrl.checkToken)

module.exports = router