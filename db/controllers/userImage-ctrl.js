const UserImageMeta = require('../models/userImageMeta-model')
const formidable = require('formidable');

insertUserImage = (req, res) => {
    /* ================== Image =================== */ 
    const form = formidable({ multiples: true });
    form.parse(req, (err, fields, files) => {
        if (err) {
          next(err);
          return;
        }
        console.log(JSON.stringify(fields, null, 2));
        console.log(JSON.stringify(files, null, 2));

        const image = files.image
        const userId = fields.userId;
        const fileName = fields.fileName;
        const destDir = 'H:/uploads/'+userId
        const destPath = destDir + '/' + fileName
        // create the dest dir if it doesn't exist
        fs = require('fs')
        if (!fs.existsSync(destDir)){
            fs.mkdirSync(destDir)
        }

        const srcPath = image.path;
        console.log(srcPath);
        fs.copyFile(image.path, destPath, (err) => {
            if (err) throw err;
            console.log('source was copied to destination');
        });

        // Other possible ways to copy the file 
        // var rawData = fs.readFileSync(image.path);
        // fs.writeFile(destPath, rawData, function(err) {
        //     console.log('[insertUserImage] error: ' + err);
        //     if (err) {
        //         console.log(err)
        //         throw err;
        //     }
        //     console.log('successfully uploaded');
        // });
        
        // fs.createReadStream(image.path).pipe(fs.createWriteStream(destDir+'/streamsTest.jpg'));

        /* ================== Meta Data =================== */        
    
        const resourcePath = 'http://10.0.0.221:3001/api/userImage/'+userId+'/'+fileName 

        const userImageMeta = new UserImageMeta({
            userId: fields.userId, 
            userLogin: fields.userLogin,
            userName: fields.userName,
            userNickname: fields.userNickname,
            src: resourcePath,
            name: fields.name,
            alt: fields.alt,
            tag: fields.tag
        })
    
        if (!userImageMeta) {
            return res.status(400).json({ success: false, error: err })
        }
    
        userImageMeta
            .save()
            .then(() => {
                return res.status(201).json({
                    success: true,
                    id: userImageMeta._id,
                    message: 'User Image Meta created!',
                })
            })
            .catch(error => {
                return res.status(400).json({
                    error,
                    message: 'User Image Meta not created!',
                })
            })
    })
}

getUserImage = (req, res) => {
    req.accepts(['jpg', 'png', 'gif', 'json'])
    const userId = req.params.userId;
    const fileName = req.params.fileName;
    const path = 'H:/uploads/'+userId
    const fullPath = path +'/'+fileName
    fs = require('fs')
    if (!fs.existsSync(path)){
        return new Error('Directory does not exist');
    }
    if (!fs.existsSync(fullPath)){
        return new Error('File does not exist');
    }

    res.sendFile(fullPath)
}

updateUserImage = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    // TODO: finish this
}

deleteUserImage = async (req, res) => {
    // TODO: finish this
}

getUserImageMeta = async (req, res) => {
    await UserImageMeta.find( { userId: req.params.id }, (err, result) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!result.length) {
            return res
                .status(404)
                .json({ success: false, error: `User Images not found` })
        }

        let mdArray = []
        for (let i = 0; i < result.length; i++)  {
            const md = result[i]
            const {src, name, alt, tag } = md
            mdArray.push( { src: src, name: name, alt: alt, tag: tag } )
        }
        return res.status(200).json( { statusCode: 200, result: mdArray })
    })

    getUserImageMetaCount = async (req, res) => {
        await UserImageMeta.find( { userId: req.params.id }, (err, result) => {
            if (err) {
                return res.status(400).json({ success: false, error: err })
            }
            if (!result.length) {
                return res
                    .status(404)
                    .json({ success: false, error: `User Images not found` })
            }
    
            return res.status(200).json({ success: true, data: { count: result.length } })
        })
    }

    insertUserImageMeta = (req, res) => {
        const body = req.body
    
        if (!body) {
            return res.status(400).json({
                success: false,
                error: 'You must provide a user image meta',
            })
        }
    
        const userImageMeta = new UserImageMeta(body)
    
        if (!userImageMeta) {
            return res.status(400).json({ success: false, error: err })
        }
    
        userImageMeta
            .save()
            .then(() => {
                return res.status(201).json({
                    success: true,
                    id: userImageMeta._id,
                    message: 'User Image Meta created!',
                })
            })
            .catch(error => {
                return res.status(400).json({
                    error,
                    message: 'User Image Meta not created!',
                })
            })
    }
    
    updateUserImageMeta = async (req, res) => {
        const body = req.body
    
        if (!body) {
            return res.status(400).json({
                success: false,
                error: 'You must provide a body to update',
            })
        }
    
        UserImageMeta.replaceOne({ _id: req.params.id}, body, (error, userImageMeta) => {
            if (error) {
                return res.status(404).json({
                    error,
                    message: 'User Image Meta not updated!',
                })
            } else {
                return res.status(200).json({
                    success: true,
                    message: userImageMeta,
                })
            }
        })
    }
    
    deleteUserImageMeta = async (req, res) => {
        await UserImageMeta.findOneAndDelete({ _id: req.params.id }, (err, userImageMeta) => {
            if (err) {
                return res.status(400).json({ success: false, error: err })
            }
    
            if (!userImage) {
                return res
                    .status(404)
                    .json({ success: false, error: `User Image Meta not found` })
            }
    
            return res.status(200).json({ success: true, data: userImageMeta })
        }).catch(err => console.log(err))
    }
    
}

module.exports = {
    insertUserImage,
    updateUserImage,
    deleteUserImage,
    getUserImageMeta,
    getUserImage
}