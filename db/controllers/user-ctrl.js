const { v4: uuidv4 } = require('uuid')

// UUID from https://www.npmjs.com/package/uuid
const util = require('util')
const User = require('../models/user-model')

insertUser = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a user',
        })
    }

    const user = new User(body)

    if (!user) {
        return res.status(400).json({ success: false, error: err })
    }

    user
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: user._id,
                message: 'User created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'User not created!',
            })
        })
}

updateUser = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    User.findOne({ _id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'User not found!',
            })
        }
        user.name = body.name
        // user.time = body.time
        // user.rating = body.rating
        user
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: user._id,
                    message: 'User updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'User not updated!',
                })
            })
    })
}

deleteUser = async (req, res) => {
    await User.findOneAndDelete({ _id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }

        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}

getUserById = async (req, res) => {
    await User.findOne({ _id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }
        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}

getAllUsers = async (req, res) => {
    const byOrdinal = { ordinal: 1 }
    await User.find({}, (err, user) => {
        result = user;
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!user.length) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }
    }).sort(byOrdinal).exec(function(err, result) {
        if (err) {
            console.log(err)
            return res.status(400).json({ success: false, error: err })
        }
        return res.status(200).json({ success: true, data: result })
    })
}

createToken = () => {
    let token = uuidv4()
    let created = new Date().getTime();
    let minutes = 30;
    let expires = created + minutes * 60000;
    return { id: token, expires: expires, issued: created }
}

login = async (req, res) => {
    // console.log(util.inspect(req.body, false, null, true))
    await User.findOne({ _id: req.body.id }, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }

        if (req.body.password === user.password) {
            let token = createToken()
            user.token = token
            console.log(util.inspect(user))
            user.save().then(() => {
                return res.status(200).json({
                    success: true,
                    data: user,
                    message: 'User logged in!',
                })
            })
            .catch(error => {
                return res.status(400).json({ success: false, error: "Could not update token" })
            })
        } else {
            return res.status(400).json({ success: false, error: "Login id and/or Password not correct" })
        }
    }).catch(err => console.log(err))
}


checkToken = async (req, res) => {
    console.log('id: ' + req.body.id)
    await User.findOne({ _id: req.body.id }, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }

        let now = new Date().getTime()
        let token = user.token
        if (token != null) {
            let expires = token.expires

            console.log(expires + "    " + now)
            if (now < expires) {
                let token = createToken()
                user.token = token
                user.save().then(() => {
                    return res.status(200).json({
                        success: true,
                        data: user,
                        message: 'Token aquired!',
                    })
                })
                .catch(error => {
                    return res.status(400).json({ success: false, error: "Could not update token" })
                })
            } else {
                user.token = null
                user.save().then(() => {
                    return res.status(400).json({ success: false, error: "Token expired" })
                })
                .catch(error => {
                    return res.status(400).json({ success: false, error: "Token expired: Could not update token" })
                })
            }
        } 
    }).catch(err => console.log(err))
}

module.exports = {
    insertUser,
    updateUser,
    deleteUser,
    getAllUsers,
    getUserById,
    login,
    checkToken
}