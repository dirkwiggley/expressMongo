const DataTypes = require('../dataTypes')
const Campaign = require('../models/campaign-model')
const Genre = require('../models/genre-model')
const Dice = require('../models/dice-model')
const AttributeType = require('../models/attributeType-model')
const Rank = require('../models/rank-model')
const Hindrance = require('../models/hindrance-model')
const Edge = require('../models/edge-model')
const ArcaneBackground = require('../models/arcaneBackground-model')
const Ability = require('../models/ability-model')
const Race = require('../models/race-model')
const Skill = require('../models/skill-model')
const Character = require('../models/character-model')
const User = require('../models/user-model')
const campaignData = require('./data/campaignData')
const genreData = require('./data/genreData')
const attrData = require('./data/attributeData')
const rankData = require('./data/rankData')
const hindranceData  = require('./data/hindranceData')
const edgeData = require('./data/edgeData')
const arcaneBackgroundData = require('./data/arcaneBackgroundData')
const abilityData = require('./data/abilityData')
const raceData = require('./data/raceData')
const skillData = require('./data/skillData')
const characterData = require('./data/characterData')
const userData = require('./data/userData')

initDataTypes = (req, res) => {
    const bodyList = [
        { name: 'attribute' },
        { name: 'campaign' },
        { name: 'dice' },
        { name: 'genre' },
        { name: 'ability' },
        { name: 'edge' },
        { name: 'arcaneBackground' },
        { name: 'hindrance' },
        { name: 'rank' },
        { name: 'race' },
        { name: 'skill' }
    ]

    let finalVal = false
    bodyList.map((body) => {
        if (body.name == 'rank')
            finalVal = true;
        saveDataTypes(res, body, finalVal)
    })
}

/**
 * I know this is wrong. It's working well enough for me 
 * to get back to it later.
 */
saveDataTypes = (res, body, finalVal) => {
    const dataType = new DataType(body)

    if (!dataType) {
        return res.status(400).json({ success: false, error: err })
    }

    dataType
        .save()
        .then(() => {
            if (finalVal) {
                return res.status(201).json({
                    success: true,
                    id: dataType._id,
                    message: 'DataTypes created!',
                })
            } else {
                return
            }
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'DataTypes not created!',
            })
        })
}

initCampaigns = (req, res) => {
    let finalVal = false

    campaignData.getCampaigns().map((body) => {
        if (body.name == 'Generic') 
            finalVal = true;
        saveCampaigns(res, body, finalVal)
    })
}

/**
 * I know this is wrong. It's working well enough for me 
 * to get back to it later.
 */
saveCampaigns = (res, body, finalVal) => {
    const campaign = new Campaign(body)

    if (!campaign) {
        return res.status(400).json({ success: false, error: err })
    }

    campaign
        .save()
        .then(() => {
            if (finalVal) {
                return res.status(201).json({
                    success: true,
                    id: campaign._id,
                    message: 'Campaigns created!',
                })
            } else {
                return
            }
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Campaigns not created!',
            })
        })
}

initGenres = (req, res) => {
    let finalVal = false

    genreData.getGenres().map((body) => {
        if (body.name == 'Post Apocalyptic') 
            finalVal = true;
        saveGenres(res, body, finalVal)
    })
}

/**
 * I know this is wrong. It's working well enough for me 
 * to get back to it later.
 */
saveGenres = (res, body, finalVal) => {
    const genre = new Genre(body)

    if (!genre) {
        return res.status(400).json({ success: false, error: err })
    }

    genre
        .save()
        .then(() => {
            if (finalVal) {
                return res.status(201).json({
                    success: true,
                    id: genre._id,
                    message: 'Genres created!',
                })
            } else {
                return
            }
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Genres not created!',
            })
        })
}

initDice = (req, res) => {
    const bodyList = [
        { name: 'D4-2', min: 1, max: 2, ordinal: 0 },
        { name: 'D4-1', min: 1, max: 3, ordinal: 1 },
        { name: 'D4', min: 1, max: 4, ordinal: 2 },
        { name: 'D6', min: 1, max: 6, ordinal: 3 },
        { name: 'D8', min: 1, max: 8, ordinal: 4 },
        { name: 'D10', min: 1, max: 10, ordinal: 5 },
        { name: 'D12', min: 1, max: 12, ordinal: 6 },
        { name: 'D12+1', min: 2, max: 13, ordinal: 7 },
        { name: 'D12+2', min: 3, max: 14, ordinal: 8 } ]
        
    let finalVal = false;

    bodyList.map((body) => {
        if (body.name == 'D12+2') 
            finalVal = true;
        saveDice(res, body, finalVal)
    })

}

/**
 * I know this is wrong. It's working well enough for me 
 * to get back to it later.
 */
saveDice = (res, body, finalVal) => {
    const dice = new Dice(body)

    if (!dice) {
        return res.status(400).json({ success: false, error: err })
    }

    dice
        .save()
        .then(() => {
            if (finalVal) {
                return res.status(201).json({
                    success: true,
                    id: dice._id,
                    message: 'Dice created!',
                })
            } else {
                return
            }
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Dice not created!',
            })
        })
}

initAttributeTypes = (req, res) => {
    let finalVal = false

    attrData.getAttributes().map((body) => {
        if (body.name == 'Vigour') 
            finalVal = true;
        saveAttributeTypes(res, body, finalVal)
    })

}

/**
 * I know this is wrong. It's working well enough for me 
 * to get back to it later.
 */
saveAttributeTypes = (res, body, finalVal) => {
    const attributeType = new AttributeType(body)

    if (!attributeType) {
        return res.status(400).json({ success: false, error: err })
    }

    attributeType
        .save()
        .then(() => {
            if (finalVal) {
                return res.status(201).json({
                    success: true,
                    id: attributeType._id,
                    message: 'AttributeType created!',
                })
            } else {
                return
            }
        })
        .catch(error => {
            console.log('error', error)
            return res.status(400).json({
                error,
                message: 'AttributeType not created!',
            })
        })
}

initRanks = (req, res) => {
    let finalVal = false

    rankData.getRanks().map((body) => {
        if (body.ordinal == 4) 
            finalVal = true;
        saveRanks(res, body, finalVal)
    })

}

/**
 * I know this is wrong. It's working well enough for me 
 * to get back to it later.
 */
saveRanks = (res, body, finalVal) => {
    const rank = new Rank(body)

    if (!rank) {
        return res.status(400).json({ success: false, error: err })
    }

    rank
        .save()
        .then(() => {
            if (finalVal) {
                return res.status(201).json({
                    success: true,
                    id: rank._id,
                    message: 'Rank created!',
                })
            } else {
                return
            }
        })
        .catch(error => {
            console.log('error', error)
            return res.status(400).json({
                error,
                message: 'Rank not created!',
            })
        })
}

initHindrances = (req, res) => {
    let finalVal = false;

    hindranceData.getHindrances().map((body) => {
        if (body.name == 'Bloodthirsty') 
            finalVal = true;
        saveHindrances(res, body, finalVal)
    })

}

/**
 * I know this is wrong. It's working well enough for me 
 * to get back to it later.
 */
saveHindrances = (res, body, finalVal) => {
    const hindrance = new Hindrance(body)

    if (!hindrance) {
        return res.status(400).json({ success: false, error: err })
    }

    hindrance
        .save()
        .then(() => {
            if (finalVal) {
                return res.status(201).json({
                    success: true,
                    id: hindrance._id,
                    message: 'Hindrance created!',
                })
            } else {
                return
            }
        })
        .catch(error => {
            console.log('error', error)
            return res.status(400).json({
                error,
                message: 'Hindrance not created!',
            })
        })
}

initEdges = (req, res) => {
    let finalVal = false;

    edgeData.getEdges().map((body) => {
        if (body.name == 'Aristocrat') 
            finalVal = true;
        saveEdges(res, body, finalVal)
    })

}

/**
 * I know this is wrong. It's working well enough for me 
 * to get back to it later.
 */
saveEdges = (res, body, finalVal) => {
    const edge = new Edge(body)

    if (!edge) {
        return res.status(400).json({ success: false, error: err })
    }

    edge
        .save()
        .then(() => {
            if (finalVal) {
                return res.status(201).json({
                    success: true,
                    id: edge._id,
                    message: 'Edge created!',
                })
            } else {
                return
            }
        })
        .catch(error => {
            console.log('error', error)
            return res.status(400).json({
                error,
                message: 'Edge not created!',
            })
        })
}

initArcaneBackgrounds = (req, res) => {
    let finalVal = false;

    arcaneBackgroundData.getArcaneBackgrounds().map((body) => {
        if (body.ordinal === 4) 
            finalVal = true;
        saveArcaneBackgrounds(res, body, finalVal)
    })

}

/**
 * I know this is wrong. It's working well enough for me 
 * to get back to it later.
 */
saveArcaneBackgrounds = (res, body, finalVal) => {
    const arcaneBackground = new ArcaneBackground(body)

    if (!arcaneBackground) {
        return res.status(400).json({ success: false, error: err })
    }

    arcaneBackground
        .save()
        .then(() => {
            if (finalVal) {
                return res.status(201).json({
                    success: true,
                    id: arcaneBackground._id,
                    message: 'Arcane Background created!',
                })
            } else {
                return
            }
        })
        .catch(error => {
            console.log('error', error)
            return res.status(400).json({
                error,
                message: 'Arcane Background not created!',
            })
        })
}

initAbilities = (req, res) => {
    let finalVal = false;

    abilityData.getAbilities().map((body) => {
        if (body.name == 'Low Light Vision') 
            finalVal = true;
        saveAbilities(res, body, finalVal)
    })

}

/**
 * I know this is wrong. It's working well enough for me 
 * to get back to it later.
 */
saveAbilities = (res, body, finalVal) => {
    const ability = new Ability(body)

    if (!ability) {
        return res.status(400).json({ success: false, error: err })
    }

    ability
        .save()
        .then(() => {
            if (finalVal) {
                return res.status(201).json({
                    success: true,
                    id: ability._id,
                    message: 'Ability created!',
                })
            } else {
                return
            }
        })
        .catch(error => {
            console.log('error', error)
            return res.status(400).json({
                error,
                message: 'Ability not created!',
            })
        })
}

initRaces = (req, res) => {
    let finalVal = false;

    raceData.getRaces().map((body) => {
        if (body.name == 'Elves') 
            finalVal = true;
        saveRaces(res, body, finalVal)
    })

}

/**
 * I know this is wrong. It's working well enough for me 
 * to get back to it later.
 */
saveRaces = (res, body, finalVal) => {
    const race = new Race(body)

    if (!race) {
        return res.status(400).json({ success: false, error: err })
    }

    race
        .save()
        .then(() => {
            if (finalVal) {
                return res.status(201).json({
                    success: true,
                    id: race._id,
                    message: 'Race created!',
                })
            } else {
                return
            }
        })
        .catch(error => {
            console.log('error', error)
            return res.status(400).json({
                error,
                message: 'Race not created!',
            })
        })
}

initSkills = (req, res) => {
    let finalVal = false;

    skillData.getSkills().map((body) => {
        if (body.name == 'Battle') 
            finalVal = true;
        saveSkills(res, body, finalVal)
    })

}

/**
 * I know this is wrong. It's working well enough for me 
 * to get back to it later.
 */
saveSkills = (res, body, finalVal) => {
    const skill = new Skill(body)

    if (!skill) {
        return res.status(400).json({ success: false, error: err })
    }

    skill
        .save()
        .then(() => {
            if (finalVal) {
                return res.status(201).json({
                    success: true,
                    id: skill._id,
                    message: 'Skill created!',
                })
            } else {
                return
            }
        })
        .catch(error => {
            console.log('error', error)
            return res.status(400).json({
                error,
                message: 'Skill not created!',
            })
        })
}

initCharacters = (req, res) => {
    let finalVal = false

    characterData.getCharacters().map((body) => {
        if (body.name == 'Blank') 
            finalVal = true;
        saveCharacters(res, body, finalVal)
    })
}

/**
 * I know this is wrong. It's working well enough for me 
 * to get back to it later.
 */
saveCharacters = (res, body, finalVal) => {
    const character = new Character(body)

    if (!character) {
        return res.status(400).json({ success: false, error: err })
    }

    character
        .save()
        .then(() => {
            if (finalVal) {
                return res.status(201).json({
                    success: true,
                    id: character._id,
                    message: 'Characters created!',
                })
            } else {
                return
            }
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Characters not created!',
            })
        })
}

initUsers = (req, res) => {
    let finalVal = false
    userData.getUsers().map((body) => {
        if (body.ordinal == 2) 
            finalVal = true;
        saveUsers(res, body, finalVal)
    })
}

/**
 * I know this is wrong. It's working well enough for me 
 * to get back to it later.
 */
saveUsers = (res, body, finalVal) => {
    const user = new User(body)

    if (!user) {
        return res.status(400).json({ success: false, error: err })
    }

    user
        .save()
        .then(() => {
            if (finalVal) {
                return res.status(201).json({
                    success: true,
                    id: user._id,
                    message: 'Users created!',
                })
            } else {
                return
            }
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Users not created!',
            })
        })
}

getItemId = (type, name, params) => {
    let items = null;
    switch (type) {
        case DataTypes.ABILITY:
            items = params.abilities ? params.abilities : [];
            break;
        case DataTypes.EDGE:
            items = params.edges ? params.edges : [];
            break;
        case DataTypes.HINDRANCE:
            items = params.hindrances ? params.hindrances : [];
            break;
        case DataTypes.SKILL:
            items = params.skills ? params.skills : [];
            break;
        case DataTypes.GENRE:
            items = params.genres ? params.genres : [];
            break;
        case DataTypes.RACE:
            items = params.races ? params.races : [];
            break;
        case DataTypes.ARCANE_BACKGROUND:
            items = params.arcaneBackgrounds ? params.arcaneBackgrounds : [];
            break;
        case DataTypes.CAMPAIGN:
            items = params.campaigns ? params.campaigns : [];
            break;
        case DataTypes.USER:
            items = params.users ? params.users : [];
            break;
        default:
            console.log(type, 'WTF?');
    }

    for (const item of items) {
        if (DataTypes.USER === type && item.login === name) {
            return item._id;
        } else if (item.name === name) {
            return item._id;
        }
    }

    return null;
}

async function updateIds(req, res) {
    var abilities = null;
    var edges = null;
    var hindrances = null;
    var skills = null;
    var races = null;
    var genres = null;
    var arcaneBackgrounds = null;
    var campaigns = null;
    var users = null;

    abilities = await Ability.find({ }, (err, abilityList) => {
        if (err) {
            console.log('Abilities not found!');
            return;
        };

        return abilityList;
    });
        
    edges = await Edge.find({ }, (err, edgeList) => {
        if (err) {
            console.log('Edges not found!');
            return;
        };

        return edgeList;
    });
    
    hindrances = await Hindrance.find({ }, (err, hindranceList) => {
        if (err) {
            console.log('Hindrances not found!');
            return;
        };

        return hindranceList;
    });
    
    skills = await Skill.find({ }, (err, skillList) => {
        if (err) {
            console.log('Skills not found!');
            return;
        };

        return skillList;
    });

    races = await Race.find({ }, (err, raceList) => {
        if (err) {
            console.log('Races not found!');
            return;
        };

        return raceList;
    });

    genres = await Genre.find({ }, (err, genreList) => {
        if (err) {
            console.log('Genres not found!');
            return;
        };

        return genreList;
    });

    arcaneBackgrounds = await ArcaneBackground.find({ }, (err, arcaneBackgroundList) => {
        if (err) {
            console.log('Arcane Backgrounds not found!');
            return;
        };

        return arcaneBackgroundList;
    });

    campaigns = await Campaign.find({ }, (err, campaignList) => {
        if (err) {
            console.log('Campaigns not found!');
            return;
        };

        return campaignList;
    });

    users = await User.find({ }, (err, userList) => {
        if (err) {
            console.log('Users not found!');
            return
        }

        return userList;
    });

    let params = {
        'abilities': abilities,
        'edges': edges,
        'hindrances': hindrances,
        'skills': skills,
        'races': races,
        'genres': genres,
        'arcaneBackgrounds': arcaneBackgrounds,
        'campaigns': campaigns,
        'users': users
    }
    updateAll(params);

    return res.status(201).json({
        success: true,
        message: 'Request recieved',
    })
};

updateAll = (params) => {
    if (params.abilities) {
        for (const ability of params.abilities) {
            let saveAbility = false;
            if (ability.incompatible) {
                for (incompatability of ability.incompatible) {
                    if (!incompatability.id) {
                        incompatability.id = getItemId(incompatability.dataType, incompatability.name, params);
                        saveAbility = true;
                    }
                }
                if (saveAbility) {
                    ability.save();
                }
            }
        };
    }
    if (params.edges) {
        for (const edge of params.edges) {
            if (edge.requires) {
                let saveEdge = false;
                for (requirement of edge.requires) {
                    // Not all edge requirements need this, hence the requirement.name
                    if (requirement.name && !requirement.id) {
                        requirement.id = getItemId(requirement.dataType, requirement.name, params);
                        saveEdge = true;
                    }
                }
                if (saveEdge) {
                    edge.save();
                }
            }
        }
    }
    if (params.hindrances) {
        for (const hindrance of params.hindrances) {
            if (hindrance.incompatible) {
                let saveHindrance = false;
                for (incompatability of hindrance.incompatible) {
                    if (!incompatability.id) {
                        incompatability.id = getItemId(incompatability.dataType, incompatability.name, params);
                        if (incompatability.id) {
                            saveHindrance = true;
                        }
                    }
                }
                if (saveHindrance) {
                    hindrance.save();
                }
            }
        }
    }
    if (params.skills) {
        for (const skill of params.skills) {
            if (skill.requires) {
                let saveSkill = false;
                for (requirement of skill.requires) {
                    if (!requirement.id) {
                        requirement.id = getItemId(requirement.dataType, requirement.name, params);
                        saveSkill = true;
                    }
                }
                if (saveSkill) {
                    skill.save();
                }
            }
        }        
    }
    if (params.genres) {
        let saveGenre = false;
        for (const genre of params.genres) {
            for (const ability of genre.abilities) {
                if (!ability.id) {
                    ability.id = getItemId(DataTypes.ABILITY, ability.name, params);
                    saveGenre = true;
                }
            }

            for (const race of genre.races) {
                if (!race.id) {
                    race.id = getItemId(DataTypes.RACE, race.name, params);
                    saveGenre = true;
                }
            }

            for (const edge of genre.edges) {
                if (!edge.id) {
                    edge.id = getItemId(DataTypes.EDGE, edge.name, params);
                    saveGenre = true;
                }
            }
            
            for (const hindrance of genre.hindrances) {
                if (!hindrance.id) {
                    hindrance.id = getItemId(DataTypes.HINDRANCE, hindrance.name, params);
                    saveGenre = true;
                }
            }
            
            for (const skill of genre.skills) {
                if (!skill.id) {
                    skill.id = getItemId(DataTypes.SKILL, skill.name, params);
                    saveGenre = true;
                }
            }
            
            for (const arcaneBackground of genre.arcaneBackgrounds) {
                if (!arcaneBackground.id) {
                    arcaneBackground.id = getItemId(DataTypes.ARCANE_BACKGROUND, arcaneBackground.name, params);
                    saveGenre = true;
                }
            }

            if (saveGenre) {
                genre.save();
            }
        }        
    }
    if (params.campaigns) {
        // iterate over the campaigns
        for (const campaign of params.campaigns) {
            // set the genre id
            let genre = campaign.genre;
            genre.id = getItemId(DataTypes.GENRE, genre.name, params);
            // set the owner id
            let owner = campaign.owner;
            owner.id = getItemId(DataTypes.USER, campaign.owner.login, params);
            // set the gm ids
            for (i = 0; i < campaign.gms.length; i++) {
                let gm = campaign.gms[i];
                gm.id = getItemId(DataTypes.USER, campaign.gms[i].login, params);
            }
            // set the player ids
            for (i = 0; i < campaign.players.length; i++) {
                let player = campaign.players[i];
                player.id = getItemId(DataTypes.USER, campaign.players[i].login, params);
            }
            // set the ability ids
            for (i = 0; i < campaign.metaData.abilities.length; i++) {
                let ability = campaign.metaData.abilities[i];
                ability.id = getItemId(DataTypes.ABILITY, campaign.metaData.abilities[i].name, params)
            }
            // set the race ids
            for (i = 0; i < campaign.metaData.races.length; i++) {
                let race = campaign.metaData.races[i];
                race.id = getItemId(DataTypes.RACE, campaign.metaData.races[i].name, params)
            }
            // set the edge ids
            for (i = 0; i < campaign.metaData.edges.length; i++) {
                let edge = campaign.metaData.edges[i];
                edge.id = getItemId(DataTypes.EDGE, campaign.metaData.edges[i].name, params)
            }
            // set the hindrance ids
            for (i = 0; i < campaign.metaData.hindrances.length; i++) {
                let hindrance = campaign.metaData.hindrances[i];
                hindrance.id = getItemId(DataTypes.HINDRANCE, campaign.metaData.hindrances[i].name, params)
            }
            // set the skill ids
            for (i = 0; i < campaign.metaData.skills.length; i++) {
                let skill = campaign.metaData.skills[i];
                skill.id = getItemId(DataTypes.SKILL, campaign.metaData.skills[i].name, params)
            }            
            // set the arcaneBackground ids
            for (i = 0; i < campaign.metaData.arcaneBackgrounds.length; i++) {
                let arcaneBackground = campaign.metaData.arcaneBackgrounds[i];
                arcaneBackground.id = getItemId(DataTypes.ARCANE_BACKGROUND, campaign.metaData.arcaneBackgrounds[i].name, params)
            }            

            campaign.save();
        }

    }
};

module.exports = {
    initCampaigns,
    initDice,
    initGenres,
    initAttributeTypes,
    initRanks,
    initHindrances,
    initEdges,
    initArcaneBackgrounds,
    initAbilities,
    initRaces,
    initSkills,
    initCharacters,
    initUsers,
    updateIds
}