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

    AttributeType.replaceOne({ _id: req.params.id}, body, (error, attributeType) => {
        if (error) {
            return res.status(404).json({
                error,
                message: 'AttributeType not updated!',
            })
        } else {
            return res.status(200).json({
                success: true,
                message: attributeType,
            })
        }
    })
}

deleteAttributeType = async (req, res) => {
    await AttributeType.findOneAndDelete({ _id: req.params.id }, (err, data) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!attributeType) {
            return res
                .status(404)
                .json({ success: false, error: `AttributeType not found` })
        }

        return res.status(200).json({ success: true, message: data })
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
        return res.status(200).json({ success: true, attributeType: attributeType })
    }).catch(err => console.log(err))
}

getAttributeTypes = async (req, res) => {
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
        return res.status(200).json({ success: true, attributeTypes: result })
    })
}

module.exports = {
    insertAttributeType,
    updateAttributeType,
    deleteAttributeType,
    getAttributeTypes,
    getAttributeTypeById
}