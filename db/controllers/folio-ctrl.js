const Folio = require('../models/folio-model')

insertFolio = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a folio',
        })
    }

    const folio = new Folio(body)

    if (!folio) {
        return res.status(400).json({ success: false, error: err })
    }

    folio
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: folio._id,
                message: 'Folio created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Folio not created!',
            })
        })
}

updateFolio = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Folio.replaceOne({ _id: req.params.id}, body, (error, folio) => {
        if (error) {
            return res.status(404).json({
                error,
                message: 'Folio not updated!',
            })
        } else {
            return res.status(200).json({
                success: true,
                message: folio,
            })
        }
    })      
}

deleteFolio = async (req, res) => {
    await Folio.findOneAndDelete({ _id: req.params.id }, (err, folio) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!folio) {
            return res
                .status(404)
                .json({ success: false, error: `Folio not found` })
        }

        return res.status(200).json({ success: true, data: folio })
    }).catch(err => console.log(err))
}

getFolioById = async (req, res) => {
    await Folio.findOne({ _id: req.params.id }, (err, folio) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!folio) {
            return res
                .status(404)
                .json({ success: false, error: `Folio not found` })
        }
        return res.status(200).json({ success: true, folio: folio })
    }).catch(err => console.log(err))
}

getFoliosByCampaignId = async (req, res) => {
    await Folio.find({ campaignid: req.params.id }, (err, data) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!data) {
            return res
                .status(404)
                .json({ success: false, error: `Folio not found` })
        }
        let folios = [];
        let userId = req.params.userId;
        for (let i=0; i < data.length; i++) {
            let folio = data[i];
            let push = false;
            if (folio.owner.id === userId) {
                push = true;
            } else {
                folio.write.forEach(writer => {
                    if (writer.id === userId) {
                        push = true;
                    }
                } );
                if (!push) {
                    folio.read.forEach(reader => {
                        if (reader.id === userId) {
                            push = true;
                        }
                    } );
                }
            }
            if (push) {
                folios.push( { 
                    id: folio._id,
                    campaignid: folio.campaignid,
                    title: folio.title,
                    owner: folio.owner,
                    read: folio.read,
                    write: folio.write
                } );
            }
        }
        return res.status(200).json({ success: true, folios: folios })
    }).catch(err => console.log(err))
}

getFolio = async (req, res) => {
    await Folio.find({}, (err, folio) => {
        result = folio;
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!folio.length) {
            return res
                .status(404)
                .json({ success: false, error: `Folio not found` })
        }
    })
}

module.exports = {
    insertFolio,
    updateFolio,
    deleteFolio,
    getFolio,
    getFolioById,
    getFoliosByCampaignId
}