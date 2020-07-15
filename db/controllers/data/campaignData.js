// name: { type: String, required: true },
// genres: [ { genreId: { type: String, required: true } } ],
// races: [ { raceId: { type: String, required: true } } ],
// edges: [ { edgeId: { type: String, required: true } } ],
// hindrances: [ { hindranceId: { type: String, required: true } } ],
// skills: [ { skillId: { type: String, required: true } } ],
// arcaneBackgrounds: [ { arcaneBackgroundId: { type: String, required: false } } ]

function getCampaigns() {
    return  [
        { 
            name: 'Generic',
            genres: [
                { name: 'Generic' },
                { name: 'Fantasy' },
                { name: 'Scifi' },
                { name: 'Horror' },
                { name: 'Cyberpunk' },
                { name: 'Steampunk' },
                { name: 'Modern' },
                { name: 'Post Apocalyptic' }
            ],
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
                { name: 'Humans' },
                { name: 'Elves' }
            ],
            edges: [
                { name: 'Alertness' },
                { name: 'Ambidexterous' },
                { name: 'Arcane Background' },
                { name: 'Arcane Reistance' },
                { name: 'Improved Arcane Resistance' },
                { name: 'Aristocrat' }
            ],
            hindrances: [
                { name: 'All Thumbs' },
                { name: 'Aarogant' },
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
            description: "<p>This is the default campaign setting. All hindrances, races, edges, skills, etc., should be in here.</p>", 
        }
        //,        
        // { 
        //     name: '',
        //     genres: [
        //         { name: '' }
        //     ],
        //     races: [ 
        //         { name: '' }
        //     ],
        //     edges: [
        //         { name: '' }
        //     ],
        //     hindrances: [
        //         { name: '' }
        //     ],
        //     skills: [
        //         { name: '' }
        //     ],
        //     arcaneBackgrounds: [
        //         { name: '' }
        //     ],
        //     description: "<p></p>"
        // }
    ]
}

module.exports = { getCampaigns }