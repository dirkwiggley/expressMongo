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
const Power = require('../models/power-model')
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
const powerData = require('./data/powerData')
const characterData = require('./data/characterData')
const userData = require('./data/userData')
const sha256 = require('js-sha256');

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

    bodyList.forEach(body => {
        saveDataTypes(res, body)
    })
    return res.status(201).json({
        success: true,
        message: 'DataTypes created!',
    })
}

saveDataTypes = (res, body) => {
    const dataType = new DataType(body)

    if (!dataType) {
        return res.status(400).json({ success: false, error: err })
    }

    dataType
        .save()
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'DataTypes not created!',
            })
        })
}

initCampaigns = (req, res) => {
    let campaigns = campaignData.getCampaigns();
    campaigns.forEach(body => {
        saveCampaigns(res, body)
    })
    return res.status(201).json({
        success: true,
        message: 'Campaigns created!',
    })
}

saveCampaigns = (res, body) => {
    const campaign = new Campaign(body)

    if (!campaign) {
        return res.status(400).json({ success: false, error: err })
    }

    campaign
        .save()
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Campaigns not created!',
            })
        })
}

initGenres = (req, res) => {
    let genres = genreData.getGenres()
    genres.forEach(body => {
        saveGenres(res, body)
    })
    return res.status(201).json({
        success: true,
        message: 'Genres created!',
    })
}

saveGenres = (res, body) => {
    const genre = new Genre(body)

    if (!genre) {
        return res.status(400).json({ success: false, error: err })
    }

    genre
        .save()
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
        
    bodyList.forEach(body => {
        saveDice(res, body)
    })
    return res.status(201).json({
        success: true,
        message: 'Dice created!',
    })
}

saveDice = (res, body) => {
    const dice = new Dice(body)

    if (!dice) {
        return res.status(400).json({ success: false, error: err })
    }

    dice
        .save()
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Dice not created!',
            })
        })
}

initAttributeTypes = (req, res) => {
    let attributes = attrData.getAttributes();
    attributes.forEach(body => {
        saveAttributeTypes(res, body, finalVal)
    })
    return res.status(201).json({
        success: true,
        message: 'AttributeTypes created!',
    })
}

saveAttributeTypes = (res, body) => {
    const attributeType = new AttributeType(body)

    if (!attributeType) {
        return res.status(400).json({ success: false, error: err })
    }

    attributeType
        .save()
        .catch(error => {
            console.log('error', error)
            return res.status(400).json({
                error,
                message: 'AttributeTypes not created!',
            })
        })
}

initRanks = (req, res) => {
    let ranks = rankData.getRanks();
    ranks.forEach(body => {
        saveRanks(res, body)
    })
    return res.status(201).json({
        success: true,
        message: 'Ranks created!',
    })
}

saveRanks = (res, body) => {
    const rank = new Rank(body)

    if (!rank) {
        return res.status(400).json({ success: false, error: err })
    }

    rank
        .save()
        .catch(error => {
            console.log('error', error)
            return res.status(400).json({
                error,
                message: 'Ranks not created!',
            })
        })
}

initHindrances = (req, res) => {
    let hindrances = hindranceData.getHindrances();
    hindrances.forEach(body => {
        saveHindrances(res, body)
    })
    return res.status(201).json({
        success: true,
        message: 'Hindrances created!',
    })
}

saveHindrances = (res, body) => {
    const hindrance = new Hindrance(body)

    if (!hindrance) {
        return res.status(400).json({ success: false, error: err })
    }

    hindrance
        .save()
        .catch(error => {
            console.log('error', error)
            return res.status(400).json({
                error,
                message: 'Hindrances not created!',
            })
        })
}

initEdges = (req, res) => {
    let edges = edgeData.getEdges()
    edges.forEach(body => {
        saveEdges(res, body, finalVal)
    })
    return res.status(201).json({
        success: true,
        message: 'Edges created!',
    })
}

saveEdges = (res, body, finalVal) => {
    const edge = new Edge(body)

    if (!edge) {
        return res.status(400).json({ success: false, error: err })
    }

    edge
        .save()
        .catch(error => {
            console.log('error', error)
            return res.status(400).json({
                error,
                message: 'Edges not created!',
            })
        })
}

initArcaneBackgrounds = (req, res) => {
    let arcaneBackgrounds = arcaneBackgroundData.getArcaneBackgrounds();
    arcaneBackgrounds.forEach(body => {
        saveArcaneBackgrounds(res, body, finalVal)
    })
    return res.status(201).json({
        success: true,
        message: 'Arcane Backgrounds created!',
    })
}

saveArcaneBackgrounds = (res, body, finalVal) => {
    const arcaneBackground = new ArcaneBackground(body)

    if (!arcaneBackground) {
        return res.status(400).json({ success: false, error: err })
    }

    arcaneBackground
        .save()
        .catch(error => {
            console.log('error', error)
            return res.status(400).json({
                error,
                message: 'Arcane Backgrounds not created!',
            })
        })
}

initAbilities = (req, res) => {
    let abilities = abilityData.getAbilities()
    abilities.forEach(body => {
        saveAbilities(res, body, finalVal)
    })
    return res.status(201).json({
        success: true,
        message: 'Ability created!',
    })
}

saveAbilities = (res, body, finalVal) => {
    const ability = new Ability(body)

    if (!ability) {
        return res.status(400).json({ success: false, error: err })
    }

    ability
        .save()
        .catch(error => {
            console.log('error', error)
            return res.status(400).json({
                error,
                message: 'Ability not created!',
            })
        })
}

initRaces = (req, res) => {
    let races = raceData.getRaces();
    races.forEach(body => {
        saveRaces(res, body, finalVal)
    })
    return res.status(201).json({
        success: true,
        message: 'Race created!',
    })
}

saveRaces = (res, body, finalVal) => {
    const race = new Race(body)

    if (!race) {
        return res.status(400).json({ success: false, error: err })
    }

    race
        .save()
        .catch(error => {
            console.log('error', error)
            return res.status(400).json({
                error,
                message: 'Race not created!',
            })
        })
}

initSkills = (req, res) => {
    let skills = skillData.getSkills();
    skills.forEach(body => {
        saveSkills(res, body, finalVal)
    })
    return res.status(201).json({
        success: true,
        message: 'Skills created!',
    })
}

saveSkills = (res, body, finalVal) => {
    const skill = new Skill(body)

    if (!skill) {
        return res.status(400).json({ success: false, error: err })
    }

    skill
        .save()
        .catch(error => {
            console.log('error', error)
            return res.status(400).json({
                error,
                message: 'Skills not created!',
            })
        })
}

initPowers = (req, res) => {
    let powers = powerData.getPowers();
    powers.map((body) => {
        savePowers(res, body, finalVal)
    })
    return res.status(201).json({
        success: true,
        message: 'Powers created!',
    })
}

savePowers = (res, body, finalVal) => {
    const power = new Power(body)

    if (!power) {
        return res.status(400).json({ success: false, error: err })
    }

    power
        .save()
        .catch(error => {
            console.log('error', error)
            return res.status(400).json({
                error,
                message: 'Powers not created!',
            })
        })
}

initCharacters = (req, res) => {
    let characters = characterData.getCharacters();
    characters.forEach(body => {
        saveCharacters(res, body, finalVal)
    })
    return res.status(201).json({
        success: true,
        id: character._id,
        message: 'Characters created!',
    })
}

saveCharacters = (res, body, finalVal) => {
    const character = new Character(body)

    if (!character) {
        return res.status(400).json({ success: false, error: err })
    }

    character
        .save()
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Characters not created!',
            })
        })
}

initUsers = (req, res) => {
    let finalVal = false
    const pwd = sha256.hmac('key', body.password);
    body.password = pwd;
    let users = userData.getUsers();
    users.forEach(body => {
        saveUsers(res, body, finalVal)
    })
    return res.status(201).json({
        success: true,
        message: 'Users created!',
    })
}

saveUsers = (res, body, finalVal) => {
    const user = new User(body)

    if (!user) {
        return res.status(400).json({ success: false, error: err })
    }

    user
        .save()
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
        case DataTypes.POWER:
            items = params.powers ? params.powers : [];
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
    var powers = null;
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

    powers = await Power.find({ }, (err, powerList) => {
        if (err) {
            console.log('Powers not found!');
            return;
        };

        return powerList;
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
        'powers': powers,
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

            for (const power of genre.powers) {
                if (!power.id) {
                    power.id = getItemId(DataTypes.POWER, power.name, params);
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
            // set the power ids
            for (i = 0; i < campaign.metaData.powers.length; i++) {
                let power = campaign.metaData.powers[i];
                power.id = getItemId(DataTypes.POWER, campaign.metaData.powers[i].name, params)
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
    initPowers,
    initCharacters,
    initUsers,
    updateIds
}