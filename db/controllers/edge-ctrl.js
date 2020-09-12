const Edge = require('../models/edge-model')

insertEdge = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a edge',
        })
    }

    const edge = new Edge(body)

    if (!edge) {
        return res.status(400).json({ success: false, error: err })
    }

    edge
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: edge._id,
                message: 'Edge created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Edge not created!',
            })
        })
}

updateEdge = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Edge.findOne({ _id: req.params.id }, (err, edge) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Edge not found!',
            })
        }
        edge.name = body.name
        // edge.time = body.time
        // edge.rating = body.rating
        edge
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: edge._id,
                    message: 'Edge updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Edge not updated!',
                })
            })
    })
}

deleteEdge = async (req, res) => {
    await Edge.findOneAndDelete({ _id: req.params.id }, (err, edge) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!edge) {
            return res
                .status(404)
                .json({ success: false, error: `Edge not found` })
        }

        return res.status(200).json({ success: true, data: edge })
    }).catch(err => console.log(err))
}

getEdgeById = async (req, res) => {
    await Edge.findOne({ _id: req.params.id }, (err, edge) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!edge) {
            return res
                .status(404)
                .json({ success: false, error: `Edge not found` })
        }
        return res.status(200).json({ success: true, data: edge })
    }).catch(err => console.log(err))
}

getEdge = async (req, res) => {
    const byOrdinal = { ordinal: 1}
    await Edge.find({}, (err, edge) => {
        result = edge;
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!edge.length) {
            return res
                .status(404)
                .json({ success: false, error: `Edge not found` })
        }
    }).sort(byOrdinal).exec(function(err, result) {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        return res.status(200).json({ success: true, edges: result })
    })
}

module.exports = {
    insertEdge,
    updateEdge,
    deleteEdge,
    getEdge,
    getEdgeById
}