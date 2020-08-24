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
        { 
            name: DataTypes.ARCANE_BACKGROUND_TYPES.MAGIC, 
            arcaneSkill: 'Spellcasting',
            attribute: 'Smarts',
            startingPowers: 3,
            powerPoints: 10,
            description: "<p>Magicians range from powerful wizards to vile cultists. They draw on raw supernatural energy to fuel their eldritch fires. This energy infuses the worlds in which they live, and is drawn forth with gestures, words of power, or ancient runes.</p>",
            ordinal: 1
        },        
        { 
            name: DataTypes.ARCANE_BACKGROUND_TYPES.MIRACLES, 
            arcaneSkill: 'Faith',
            attribute: 'Spirit',
            startingPowers: 3,
            powerPoints: 10,
            description: "<p>Those who invoke miracles draw their power from a divine presence of some sort, including gods, nature, or spirits. Their powers are usually invoked with a few words of prayer or by performing established rituals.</p><p>Those who cast miracles are champions of their particular religions. They typically have Hindrances that pertain to their service, such as Vow or Obligation. They might also have Connections to others of their religion who can help them out when their divine energies wane.</p>",
            ordinal: 2
        },        
        { 
            name: DataTypes.ARCANE_BACKGROUND_TYPES.PSIONICS, 
            arcaneSkill: DataTypes.ARCANE_BACKGROUND_TYPES.PSIONICS,
            attribute: 'Smarts',
            startingPowers: 3,
            powerPoints: 10,
            description: "<p>Psionicists tap into their won mental energy to manipulate matter, read minds, and far more. Some agents are in the employ of a vast government agency, while others are often on the run from them! Some may have years of training or they might have developed their incredible powers in isolation.</p>",
            ordinal: 3
        },        
        { 
            name: DataTypes.ARCANE_BACKGROUND_TYPES.WEIRD_SCIENCE, 
            arcaneSkill: DataTypes.ARCANE_BACKGROUND_TYPES.WEIRD_SCIENCE
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