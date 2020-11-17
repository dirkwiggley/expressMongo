//         name: { type: String, required: true },
//         genre: { 
//             id: { type: String, required: true }, 
//             name: { type: String, required: true } },
//         owner: { 
//             id: { type: String, required: true }, 
//             login: { type: String, required: true }, 
//             nickname: { type: String, required: true } },
//         gms: [ { 
//             id: { type: String, required: true }, 
//             login: { type: String, required: true }, 
//             nickname: { type: String, required: true } } ],
//         players: [ { 
//             id: { type: String, required: true }, 
//             login: { type: String, required: true }, 
//             nickname: { type: String, required: true } } ],
//         metaData: {
//             abilities: [ { 
//                 id: { type: String, required: true }, 
//                 name: { type: String, required: true } } ],
//             races: [ { 
//                 id: { type: String, required: true }, 
//                 name: { type: String, required: true } } ],
//             edges: [ { 
//                 id: { type: String, required: true }, 
//                 name: { type: String, required: true } } ],
//             hindrances: [ { 
//                 id: { type: String, required: true }, 
//                 name: { type: String, required: true } } ],
//             skills: [ { 
//                 id: { type: String, required: true }, 
//                 name: { type: String, required: true } } ],
//             arcaneBackgrounds: [ { 
//                 id: { type: String, required: true }, 
//                 name: { type: String, required: true } } ],
//             powers: [ { 
//                 id: { type: String, required: true }, 
//                 name: { type: String, required: true } } ]
//         }

function getCampaigns() {
    return  [
        { 
            name: 'Generic',
            genre: { name: 'Generic' },
            owner: { login: 'player', nickname: 'Demo' },
            gms: [ { login: 'tim', nickname: 'DM Tim' } ],
            // players: [ {} ],
            metaData: {
                abilities: [
                    { name: 'Adaptable' },
                    { name: 'Additional Action' },
                    { name: 'Semi-Aquatic' },
                    { name: 'Aquatic' },
                    { name: 'Armor' },
                    { name: 'Agile' },
                    { name: 'Smart' },
                    { name: 'Spirited' },
                    { name: 'Strong' },
                    { name: 'Vigorous' },
                    { name: 'Low Light Vision' }
                ],
                races: [ 
                    { name: 'Human' },
                    { name: 'Elf' }
                ],
                edges: [
                    { name: 'Alertness' },
                    { name: 'Ambidextrous' },
                    { name: 'Arcane Background' },
                    { name: 'Arcane Resistance' },
                    { name: 'Improved Arcane Resistance' },
                    { name: 'Aristocrat' },
                    { name: 'Luck' }
                ],
                hindrances: [
                    { name: 'All Thumbs' },
                    { name: 'Anemic' },
                    { name: 'Arrogant' },
                    { name: 'Bad Eyes - Minor' },
                    { name: 'Bad Eyes - Major' },
                    { name: 'Bad Luck' },
                    { name: 'Big Mouth' },
                    { name: 'Blind' },
                    { name: 'Bloodthirsty' },
                ],
                skills: [
                    { name: 'Academics' },
                    { name: 'Athletics (Agility)' },
                    { name: 'Athletics (Strength)' },
                    { name: 'Battle' }
                ],
                arcaneBackgrounds: [
                    { name: 'Gifted' },
                    { name: 'Magic' },
                    { name: 'Miracles' },
                    { name: 'Psionics' },
                    { name: 'Weird Science' }
                ],
                powers: [
                    { name: 'Arcane Protection' },
                    { name: 'Armor' }
                ]
            },
            description: "This is the default campaign setting. All hindrances, races, edges, skills, etc., should be in here.", 
        },
        { 
            name: 'Pirates',
            genre: { name: 'Fantasy' },
            owner: { login: 'tim', nickname: 'DM Tim' },
            gms: [ { login: 'tim', nickname: 'DM Tim' } ],
            players: [ { login: 'player', nickname: 'Demo' } ],
            metaData: {
                abilities: [
                    { name: 'Adaptable' },
                    { name: 'Additional Action' },
                    { name: 'Semi-Aquatic' },
                    { name: 'Aquatic' },
                    { name: 'Armor' },
                    { name: 'Agile' },
                    { name: 'Smart' },
                    { name: 'Spirited' },
                    { name: 'Strong' },
                    { name: 'Vigorous' },
                    { name: 'Low Light Vision' }
                ],
                races: [ 
                    { name: 'Human' },
                    { name: 'Elf' }
                ],
                edges: [
                    { name: 'Alertness' },
                    { name: 'Ambidextrous' },
                    { name: 'Arcane Background' },
                    { name: 'Arcane Resistance' },
                    { name: 'Improved Arcane Resistance' },
                    { name: 'Aristocrat' },
                    { name: 'Luck' }
                ],
                hindrances: [
                    { name: 'All Thumbs' },
                    { name: 'Anemic' },
                    { name: 'Arrogant' },
                    { name: 'Bad Eyes - Minor' },
                    { name: 'Bad Eyes - Major' },
                    { name: 'Bad Luck' },
                    { name: 'Big Mouth' },
                    { name: 'Blind' },
                    { name: 'Bloodthirsty' },
                ],
                skills: [
                    { name: 'Academics' },
                    { name: 'Athletics (Agility)' },
                    { name: 'Athletics (Strength)' },
                    { name: 'Battle' }
                ],
                arcaneBackgrounds: [
                    { name: 'Gifted' },
                    { name: 'Magic' },
                    { name: 'Miracles' },
                    { name: 'Weird Science' }
                ],
                powers: [
                    { name: 'Arcane Protection' },
                    { name: 'Armor' }
                ]
            },
            description: "This is a fantasy pirates setting.", 
        }        
    ]
}

module.exports = { getCampaigns }