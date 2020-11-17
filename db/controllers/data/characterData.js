const { RACE } = require('../../dataTypes')
const DataTypes = require('../../dataTypes')

        // campaign: { type: String, required: true },
        // name: { type: String, required: true },
        // player: { type: String, required: true },
        // race: { type: String, required: true },
        // abilities: [ { name: { type: String, required: true }, cost: { type: Number, required: true} } ],
        // attributes: [ { name: { type: String, required: true }, dice: { type: String, required: true} } ],
        // edges: [ { name: { type: String, required: true }, cost: { type: Number, required: true} } ],
        // hindrances: [ { name: { type: String, required: true }, cost: { type: Number, required: true} } ],
        // skills: [ { name: { type: String, required: true }, cost: { type: Number, required: true} } ],
        // arcaneBackgrounds: [ { name: { type: String, required: true }, cost: { type: Number, required: true} } ],
        // advances: { type: Number, required: true},
        // rank: { type: String, required: true },
        // description: { type: String, required: false }

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
                    paid: 'RACE',
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
        //,        
        // { 
        //     campaign: 'Generic',
        //     name: 'Blank',
        //     player: 'NPC',
        //     race: 'Human',
        //     abilities: [ { name: 'Adaptable' } ],
        //     attributes: [ 
        //         { name: 'Agility', dice: 'D4' },
        //         { name: 'Smarts', dice: 'D4' },
        //         { name: 'Spirit', dice: 'D4' },
        //         { name: 'Strength', dice: 'D4' },
        //         { name: 'Vigour', dice: 'D4' }
        //     ],
        //     edges: null,
        //     hindrances: null,
        //     skills: null,
        //     arcaneBackgrounds: null,
        //     advances: null,
        //     rank: null,
        //     description: null, 
        // }
    ]
}

module.exports = { getCharacters }