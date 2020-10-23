const express = require('express')
const cors = require('cors')

const UserImageCtrl = require('../controllers/userImage-ctrl')

const router = express.Router()
const methods = [ 'GET', 'HEAD', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'DELETE' ]
const corsOptions = {
    origin: '*',
    methods: methods,
    preflightContinue: true
}
router.use(cors())

router.post('/userImage', UserImageCtrl.insertUserImage)
// router.put('/userImage/:id', UserImageCtrl.updateUserImage)
// router.delete('/userImage/:id', UserImageCtrl.deleteUserImage)
router.get('/userImageMeta/:id', UserImageCtrl.getUserImageMeta)
router.get('/userImage/:userId/:fileName', cors(), UserImageCtrl.getUserImage)
// router.get('/userImageMeta/count/:id', UserImageCtrl.getUserImageMetaCount)
// router.get('/userImage', UserImageCtrl.getRank)

module.exports = router