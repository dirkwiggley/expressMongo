function getGenres() {
    return [
        { 
            name: 'Generic',
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
                { name: 'Low Light Vision'}
            ],
            races: [ 
                { name: 'Humans' }, 
                { name: 'Elves' }
            ], 
            edges: [ 
                { name: 'Alertness' }, 
                { name: 'Ambidextrous' }, 
                { name: 'Arcane Background' }, 
                { name: 'Arcane Resistance' }, 
                { name: 'Improved Arcane Resistance' }, 
                { name: 'Aristocrat' }
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
                { name: 'Bloodthirsty' }
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
            ]
        },
        { name: 'Fantasy' },
        { name: 'Scifi' },
        { name: 'Horror' },
        { name: 'Cyberpunk' },
        { name: 'Steampunk' },
        { 
            name: 'Modern',
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
                { name: 'Low Light Vision'}
            ],
            races: [ 
                    { name: 'Humans' }
            ], 
            edges: [ 
                { name: 'Alertness' }, 
                { name: 'Ambidextrous' }, 
                { name: 'Arcane Background' }, 
                { name: 'Aristocrat' }
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
                { name: 'Bloodthirsty' }
            ],
            skills: [
                { name: 'Academics' }, 
                { name: 'Athletics (Agility)' }, 
                { name: 'Athletics (Strength)' }, 
                { name: 'Battle' }
            ],
            arcaneBackgrounds: [
                { name: 'Gifted' },
                { name: 'Psionics' }
            ]
        },
        { name: 'Post Apocalyptic' }
    ]
}

module.exports = { getGenres }