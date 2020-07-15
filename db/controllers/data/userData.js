const Privilige = require('../../models/constants')

function getUsers() {
    return  [
        { 
            login: 'admin',
            password: 'admin',
            name: 'Tim',
            nickName: 'Admin',
            campaignsPlayer: null,
            campaignsGM: null,
            priviliges: [ { id: Privilige.APP_ADMIN } ],
            token: null
        },
        { 
            login: 'player',
            password: 'player',
            name: 'Tim',
            nickName: 'Tim',
            campaignsPlayer: [ { id: 'Generic' } ],
            campaignsGM: [ { id: 'Generic' } ],
            priviliges: [ { id: Privilige.APP_USER } ],
            token: null
        },
        { 
            login: 'test',
            password: 'test',
            name: 'Tim',
            nickName: 'Timmay',
            campaignsPlayer: [ { id: 'Generic' } ],
            campaignsGM: [ { id: 'Generic' } ],
            priviliges: [ { id: Privilige.APP_ADMIN }, { id: Privilige.APP_USER } ],
            token: null
        }
    ]
}

module.exports = { getUsers }