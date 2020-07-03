const AttributeType = require('../models/attributeType-model')

insertAttributeType = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a attributeType',
        })
    }

    const attributeType = new AttributeType(body)

    if (!attributeType) {
        return res.status(400).json({ success: false, error: err })
    }

    attributeType
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: attributeType._id,
                message: 'AttributeType created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'AttributeType not created!',
            })
        })
}

updateAttributeType = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    AttributeType.findOne({ _id: req.params.id }, (err, attributeType) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'AttributeType not found!',
            })
        }
        attributeType.name = body.name
        // attributeType.time = body.time
        // attributeType.rating = body.rating
        attributeType
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: attributeType._id,
                    message: 'AttributeType updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'AttributeType not updated!',
                })
            })
    })
}

deleteAttributeType = async (req, res) => {
    await AttributeType.findOneAndDelete({ _id: req.params.id }, (err, attributeType) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!attributeType) {
            return res
                .status(404)
                .json({ success: false, error: `AttributeType not found` })
        }

        return res.status(200).json({ success: true, data: attributeType })
    }).catch(err => console.log(err))
}

getAttributeTypeById = async (req, res) => {
    await AttributeType.findOne({ _id: req.params.id }, (err, attributeType) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!attributeType) {
            return res
                .status(404)
                .json({ success: false, error: `AttributeType not found` })
        }
        return res.status(200).json({ success: true, data: attributeType })
    }).catch(err => console.log(err))
}

getAttributeType = async (req, res) => {
    const byOrdinal = { ordinal: 1}
    await AttributeType.find({}, (err, attributeType) => {
        result = attributeType;
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!attributeType.length) {
            return res
                .status(404)
                .json({ success: false, error: `AttributeType not found` })
        }
    }).sort(byOrdinal).exec(function(err, result) {
        return res.status(200).json({ success: true, data: result })
    }).catch(err => console.log(err))
}

module.exports = {
    insertAttributeType,
    updateAttributeType,
    deleteAttributeType,
    getAttributeType,
    getAttributeTypeById
}