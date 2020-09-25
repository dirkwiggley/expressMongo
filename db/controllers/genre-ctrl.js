const Genre = require('../models/genre-model')

insertGenre = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a genre',
        })
    }

    Genre.findOne({ name: req.params.name }, (err, genre) => {
        if (genre) {
            return res.status(404).json({
                err,
                message: 'Genre already exists!',
            });
        }
    } );

    const genre = new Genre(body)
    if (!genre) {
        return res.status(400).json({ success: false, error: err })
    }

    genre
        .save()
        .then((saveResponse) => {
            return res.status(201).json({
                success: true,
                id: genre._id,
                message: saveResponse,
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Genre not created!',
            })
        });
}

updateGenre = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Genre.replaceOne({ _id: req.params.id}, body, (error, genre) => {
        if (error) {
            return res.status(404).json({
                error,
                message: 'Genre not updated!',
            })
        } else {
            return res.status(200).json({
                success: true,
                message: genre,
            })
        }
    })    
}

deleteGenre = async (req, res) => {
    await Genre.findOneAndDelete({ _id: req.params.id }, (error, genre) => {
        if (error) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!genre) {
            return res
                .status(404)
                .json({ success: false, error: `Genre not found` })
        }

        return res.status(200).json({ success: true, data: genre })
    }).catch(err => console.log(err))
}

getGenreById = async (req, res) => {
    await Genre.findOne({ _id: req.params.id }, (err, genre) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!genre) {
            return res
                .status(404)
                .json({ success: false, error: `Genre not found` })
        }
        return res.status(200).json({ success: true, data: genre })
    }).catch(err => console.log(err))
}

getGenres = async (req, res) => {
    await Genre.find({}, (err, genres) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!genres.length) {
            return res
                .status(404)
                .json({ success: false, error: `Genre not found` })
        }
        return res.status(200).json({ success: true, genres: genres })
    })
}

module.exports = {
    insertGenre,
    updateGenre,
    deleteGenre,
    getGenres,
    getGenreById
}