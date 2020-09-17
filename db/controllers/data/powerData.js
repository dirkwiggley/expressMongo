// name: { type: String, required: true },
// rank: { type: String, required: true },
// powerPoints: { type: Number, required: true },
// range: { type: String, required: true },
// duration: [ { type: String, required: true } ],
// trappings: { type: String, required: true },
// description: { type: String, required: true },
// modifiers: [ { 
//     name: { type: String, required: false}, 
//     powerPoints: [ { type: Number, required: false } ],
//     description: { type: String, required: false }
// } ]

const constants = require('../../constants')

function getPowers() {
    return  [
        { 
            name: "Arcane Protection",
            rank: constants.NOVICE,
            powerPoints: 1,
            range: constants.SMARTS,
            duration: 5,
            trappings: "Concentration, a dull glow around the protected character, a fetish.",
            description: "Success with arcane protection means hostile powers suffer a -2 (-4 with raise) to affect this character. If the power causes harm, damage is also reduced a like amount. Arcane protection stacks with arcane resistance should the recipient have both!",
            modifiers: [ 
                { 
                    name: "ADDITIONAL RECIPIENTS",
                    powerPoints: [ 1 ],
                    description: "The power may affect more than one target for 1 additional Power Point each."
                 }
            ]
        },        
        { 
            name: 'Armor',
            rank: constants.NOVICE,
            powerPoints: 1,
            range: constants.SMARTS,
            duration: 5,
            trappings: "A mystical glow, hardened skin, etherial armor, a mass of nanites.",
            description: "Protection creates a field of energy or armor around a character, giving him 2 points of armor or 4 with a raise. Whether the protection is visible or not depends on the trapping - this is entirely up to the caster. Protection doesn't normally stack with other armor but see the Toughtness modifier.",
            modifiers: [ 
                { 
                    name: 'ADDITIONAL RECIPIENTS',
                    powerPoints: [ 1 ],
                    description: 'The power may affect more than one target for 1 additional Power Point each.'
                 },
                 { 
                    name: 'MORE ARMOR',
                    powerPoints: [ 1 ],
                    description: 'Success grants 4 points of armor, 6 with a raise.'
                 },
                 { 
                    name: 'TOUGHNESS',
                    powerPoints: [ 2 ],
                    description: 'Protection provides Toughness instead of Armor and is not affected by AP (magical or otherwise). This means it stacks with natural or worn armor.'
                 }
            ]
        },
    ]
}

module.exports = { getPowers }