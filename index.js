const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// Experimenting with the CORS options
const whitelist = ['http://10.0.0.221:3000', 'http://localhost:3000']
const methods = [ 'GET', 'HEAD', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'DELETE' ]
const corsOptions = {
    // origin: whitelist,
    origin: '*',
    methods: methods,
    preflightContinue: true
}
const app = express()
app.use(cors(corsOptions))
app.use(function(req, res, next) {
    next()
})

const db = require('./db')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const campaignRouter = require('./db/routes/campaign-router')
const genreRouter = require('./db/routes/genre-router')
const diceRouter = require('./db/routes/dice-router')
const adminRouter = require('./db/routes/admin-router')
const attributeTypeRouter = require('./db/routes/attributeType-router')
const rankRouter = require('./db/routes/rank-router')
const hindranceRouter = require('./db/routes/hindrance-router')
const edgeRouter = require('./db/routes/edge-router')
const arcaneBackgroundRouter = require('./db/routes/arcaneBackground-router')
const abilityRouter = require('./db/routes/ability-router')
const raceRouter = require('./db/routes/race-router')
const characterRouter = require('./db/routes/character-router')
const userRouter = require('./db/routes/user-router')
const skillRouter = require('./db/routes/skill-router')
const powerRouter = require('./db/routes/power-router')
const folioRouter = require('./db/routes/folio-router')


app.use(bodyParser.urlencoded({ extended: true }))
// app.use(cors())
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', campaignRouter, genreRouter, diceRouter, adminRouter, attributeTypeRouter, rankRouter, hindranceRouter)
app.use('/api', edgeRouter, arcaneBackgroundRouter, abilityRouter, raceRouter, characterRouter, userRouter, skillRouter)
app.use('/api', powerRouter, folioRouter)

function error(err, req, res, next) {
    console.error(err.stack);
  
    // respond with 500 "Internal Server Error".
    res.status(500);
    res.send('Internal Server Error');
}

// This overrides the default error handler, and must be called _last_ on the app
app.use(error);


const apiPort = 3001
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
