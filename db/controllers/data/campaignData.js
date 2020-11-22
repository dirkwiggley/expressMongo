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
                    { name: 'Adaptable', cost: 2 },
                    { name: 'Additional Action', cost: 3 },
                    { name: 'Semi-Aquatic', cost: 1 },
                    { name: 'Aquatic', cost: 2 },
                    { name: 'Armor', cost: 1 },
                    { name: 'Agile', cost: 2 },
                    { name: 'Smart', cost: 2 },
                    { name: 'Spirited', cost: 2 },
                    { name: 'Strong', cost: 2 },
                    { name: 'Vigorous', cost: 2 },
                    { name: 'Low Light Vision', cost: 1 }
                ],
                races: [ 
                    { name: 'Human' },
                    { name: 'Elf' }
                ],
                edges: [
                    { name: 'Alertness', cost: 1 },
                    { name: 'Ambidextrous', cost: 1 },
                    { name: 'Arcane Background', cost: 1 },
                    { name: 'Arcane Resistance', cost: 1 },
                    { name: 'Improved Arcane Resistance', cost: 1 },
                    { name: 'Aristocrat', cost: 1 },
                    { name: 'Luck', cost: 1 }
                ],
                hindrances: [
                    { name: 'All Thumbs', cost: 1 },
                    { name: 'Anemic', cost: 1 },
                    { name: 'Arrogant', cost: 2 },
                    { name: 'Bad Eyes - Minor', cost: 1 },
                    { name: 'Bad Eyes - Major', cost: 2 },
                    { name: 'Bad Luck', cost: 2 },
                    { name: 'Big Mouth', cost: 1 },
                    { name: 'Blind', cost: 2 },
                    { name: 'Bloodthirsty', cost: 2 },
                ],
                skills: [
                    { name: 'Academics' },
                    { name: 'Athletics (Agility)' },
                    { name: 'Athletics (Strength)' },
                    { name: 'Battle' },
                    { name: 'Common Knowledge' },
                    { name: 'Fighting' },
                    { name: 'Notice' },
                    { name: 'Persuasion' },
                    { name: 'Shooting' }
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
                    { name: 'Adaptable', cost: 2 },
                    { name: 'Additional Action', cost: 3 },
                    { name: 'Semi-Aquatic', cost: 1 },
                    { name: 'Aquatic', cost: 2 },
                    { name: 'Armor', cost: 1 },
                    { name: 'Agile', cost: 2 },
                    { name: 'Smart', cost: 2 },
                    { name: 'Spirited', cost: 2 },
                    { name: 'Strong', cost: 2 },
                    { name: 'Vigorous', cost: 2 },
                    { name: 'Low Light Vision', cost: 1 }
                ],
                races: [ 
                    { name: 'Human' },
                    { name: 'Elf' }
                ],
                edges: [
                    { name: 'Alertness', cost: 1 },
                    { name: 'Ambidextrous', cost: 1 },
                    { name: 'Arcane Background', cost: 1 },
                    { name: 'Arcane Resistance', cost: 1 },
                    { name: 'Improved Arcane Resistance', cost: 1 },
                    { name: 'Aristocrat', cost: 1 },
                    { name: 'Luck', cost: 1 }
                ],
                hindrances: [
                    { name: 'All Thumbs', cost: 1 },
                    { name: 'Anemic', cost: 1 },
                    { name: 'Arrogant', cost: 2 },
                    { name: 'Bad Eyes - Minor', cost: 1 },
                    { name: 'Bad Eyes - Major', cost: 2 },
                    { name: 'Bad Luck', cost: 2 },
                    { name: 'Big Mouth', cost: 1 },
                    { name: 'Blind', cost: 2 },
                    { name: 'Bloodthirsty', cost: 2 },
                ],
                skills: [
                    { name: 'Academics' },
                    { name: 'Athletics (Agility)' },
                    { name: 'Athletics (Strength)' },
                    { name: 'Battle' },
                    { name: 'Common Knowledge' },
                    { name: 'Fighting' },
                    { name: 'Notice' },
                    { name: 'Persuasion' },
                    { name: 'Shooting' }
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