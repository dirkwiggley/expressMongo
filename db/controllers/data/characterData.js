const dataTypes = require('../../dataTypes')

function getCharacters() {
    return  [
        { 
            campaign: 'Pirates',
            campaignId: null,
            name: 'Common Marine',
            owner: {
                id: null,
                name: null,
                login: null,
                nickname: 'GM'
            },
            race: {
                name: 'Human',
                id: null
            },
            abilities: [
                { 
                    name: 'Adaptable', 
                    cost: 2,
                    paid: dataTypes.RACE,
                    notes: null
                },
            ],
            attributes: [ 
                {
                    name: 'Agility', 
                    dice: 'D6',
                    paid: [ 
                        'ATTRIBUTE_POINT'
                    ],
                    modifiers: null
                },
                { 
                    name: 'Smarts', 
                    dice: 'D4',
                    paid: [],
                    modifiers: null
                },
                { 
                    name: 'Spirit', 
                    dice: 'D6',
                    paid: [
                        'ATTRIBUTE_POINT'
                    ],
                    modifiers: null
                },
                { name: 
                    'Strength', 
                    dice: 'D6',
                    paid: [
                        'ATTRIBUTE_POINT'
                    ],
                    modifiers: null
                },
                { 
                    name: 'Vigour', 
                    dice: 'D6',
                    paid: [
                        'ATTRIBUITE_POINT'
                    ],
                    modifiers: null
                }
            ],
            edges: null,
            hindrances: null,
            skills: [ {
                name: 'Common Knowledge',
                id: null, 
                paid: [ 'FREE' ],
                modifiers: null,
            }, {
                name: 'Notice',
                id: null, 
                paid: [ 'FREE' ],
                modifiers: null,
            }, {
                name: 'Persuasion',
                id: null, 
                paid: [ 'FREE' ],
                modifiers: null,
            }, {
                name: 'Stealth',
                id: null, 
                paid: [ 'FREE' ],
                modifiers: null,
            }, {
                name: 'Fighting',
                id: null, 
                paid: [ 'SKILL_POINT', 'SKILL_POINT' ],
                modifiers: null,
            }, {
                name: 'Shooting',
                id: null, 
                paid: [ 'SKILL_POINT', 'SKILL_POINT' ],
                modifiers: null,
            } ],
            arcaneBackgrounds: null,
            powers: null,
            advances: 0,
            rank: 'Novice',
            description: null, 
        }
    ]
}

module.exports = { getCharacters }