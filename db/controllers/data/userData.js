const Privilige = require('../../models/constants')

function getUsers() {
    return  [
        { 
            login: 'admin',
            password: 'admin',
            name: 'Tim',
            nickname: 'Admin',
            email: 'dm_tim@yahoo.com',
            campaignsPlayer: null,
            campaignsGM: null,
            priviliges: [ { id: Privilige.APP_ADMIN } ],
            token: null
        },
        { 
            login: 'player',
            password: 'player',
            name: 'Tim',
            nickname: 'Tim',
            email: 'dm_tim@yahoo.com',
            campaignsPlayer: [ { id: 'Generic' } ],
            campaignsGM: [ { id: 'Generic' } ],
            priviliges: [ { id: Privilige.APP_USER } ],
            token: null
        },
        { 
            login: 'test',
            password: 'test',
            name: 'Tim',
            nickname: 'Timmay',
            email: 'dm_tim@yahoo.com',
            campaignsPlayer: [ { id: 'Generic' } ],
            campaignsGM: [ { id: 'Generic' } ],
            priviliges: [ { id: Privilige.APP_ADMIN }, { id: Privilige.APP_USER } ],
            token: null
        }
    ]
}

module.exports = { getUsers }