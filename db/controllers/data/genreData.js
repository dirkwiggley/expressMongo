function getGenres() {
    return [
        { 
            name: 'Generic', 
            races: [ 
                'Humans', 
                'Elves'
            ], 
            edges: [ 
                'Alertness', 
                'Ambidextrous', 
                'Arcane Background', 
                'Arcane Resistance', 
                'Improved Arcane Resistance', 
                'Aristocrat'],
            hindrances: [
                'All Thumbs', 
                'Anemic', 
                'Arrogant', 
                'Bad Eyes - Minor', 
                'Bad Eyes - Major', 
                'Bad Luck', 
                'Big Mouth', 
                'Blind', 
                'Bloodthirsty'
            ],
            skills: [
                'Academics', 
                'Athletics (Agility)', 
                'Athletics (Strength)', 
                'Battle'
            ],
            arcaneBackgrounds: [
                'Gifted',
                'Magic',
                'Miracles',
                'Psionics',
                'Weird Science'
            ]
        },
        { name: 'Fantasy' },
        { name: 'Scifi' },
        { name: 'Horror' },
        { name: 'Cyberpunk' },
        { name: 'Steampunk' },
        { name: 'Modern' },
        { name: 'Post Apocalyptic' }
    ]
}

module.exports = { getGenres }