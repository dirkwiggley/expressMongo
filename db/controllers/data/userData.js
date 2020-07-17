const Privilege = require('../../models/constants')

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
            privileges: [ { id: Privilege.APP_ADMIN } ],
            token: null,
            ordinal: 0
        },
        { 
            login: 'player',
            password: 'player',
            name: 'Tim',
            nickname: 'Tim',
            email: 'dm_tim@yahoo.com',
            campaignsPlayer: [ { id: 'Generic' } ],
            campaignsGM: [ { id: 'Generic' } ],
            privileges: [ { id: Privilege.APP_USER } ],
            token: null,
            ordinal: 1
        },
        { 
            login: 'tim',
            password: 'adminadmin',
            name: 'Tim',
            nickname: 'Timmay',
            email: 'dm_tim@yahoo.com',
            campaignsPlayer: [ { id: 'Generic' } ],
            campaignsGM: [ { id: 'Generic' } ],
            privileges: [ { id: Privilege.APP_ADMIN }, { id: Privilege.APP_USER } ],
            token: null,
            ordinal: 2
        }
    ]
}

module.exports = { getUsers }