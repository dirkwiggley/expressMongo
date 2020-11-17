
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
            isAdmin: true,
            isUser: false,
            token: null
        },
        { 
            login: 'player',
            password: 'player',
            name: 'Tim',
            nickname: 'Tim',
            email: 'dm_tim@yahoo.com',
            isAdmin: false,
            isUser: true,
            token: null
        },
        { 
            login: 'tim',
            password: 'adminadmin',
            name: 'Tim',
            nickname: 'Timmay',
            email: 'dm_tim@yahoo.com',
            isAdmin: true,
            isUser: true,
            token: null
        },
        { 
            login: 'eric',
            password: 'ericeric',
            name: 'Eric',
            nickname: 'Eric',
            email: 'ewburnham@gmail.com',
            isAdmin: false,
            isUser: true,
            token: null
        }
    ]
}

module.exports = { getUsers }