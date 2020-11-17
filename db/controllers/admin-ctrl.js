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
const attributeTypeData = require('./data/attributeData')
const rankData = require('./data/rankData')
const skillData = require('./data/skillData')
const hindranceData  = require('./data/hindranceData')
const edgeData = require('./data/edgeData')
const arcaneBackgroundData = require('./data/arcaneBackgroundData')
const abilityData = require('./data/abilityData')
const raceData = require('./data/raceData')
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

function initCampaigns(req, res) {
    const items = campaignData.getCampaigns()
    initItems(req, res, items, Campaign, 'Campaigns', 'campaign')
}

function initGenres(req, res) {
    const items = genreData.getGenres()
    initItems(req, res, items, Genre, 'Genres', 'genre')
}

function initAttributeTypes(req, res) {
    const items = attributeTypeData.getAttributes()
    initItems(req, res, items, AttributeType, 'Attribute Types', 'attribute type')
}

function initRanks(req, res) {
    const items = rankData.getRanks()
    initItems(req, res, items, Rank, 'Ranks', 'rank')
}

function initHindrances(req, res) {
    const items = hindranceData.getHindrances()
    initItems(req, res, items, Hindrance, 'Hindrnces', 'hindrance')
}

function initEdges(req, res) {
    const items = edgeData.getEdges()
    initItems(req, res, items, Edge, 'Edges', 'edge')
}

function initArcaneBackgrounds(req, res) {
    const items = arcaneBackgroundData.getArcaneBackgrounds()
    initItems(req, res, items, ArcaneBackground, 'ArcaneBackgrounds', 'arcaneBackground')
}

function initAbilities(req, res) {
    const items = abilityData.getAbilities()
    initItems(req, res, items, Ability, 'Abilities', 'ability')
}

function initRaces(req, res) {
    const items = raceData.getRaces()
    initItems(req, res, items, Race, 'Races', 'race')
}

function initSkills(req, res) {
    const items = skillData.getSkills()
    initItems(req, res, items, Skill, 'Skills', 'skill')
}

function initPowers(req, res) {
    const items = powerData.getPowers()
    initItems(req, res, items, Power, 'Powers', 'power')
}

function initCharacters(req, res) {
    const items = characterData.getCharacters()
    initItems(req, res, items, Character, 'Characters', 'character')
}

async function initItems(req, res, items, classType, pluralCap, singular) {
    const successMsg = pluralCap + " created"
    const errMsg1 = singular
    const errMsg2 = pluralCap + " not created"
    let responses = []
    for (const body of items) {
        await saveItem(classType, body, errMsg1, errMsg2).catch(reject => responses.push(reject));
    }
    if (responses.length > 0) {
        return res.status(400).json( { success: false, responses: responses } )
    }
    return res.status(201).json({
        success: true,
        message: successMsg,
    })
}

async function saveItem(classType, body, errMsg1, errMsg2) {
    return new Promise((resolve, reject) => {
        const item = new classType(body)
        if (!item) {
            reject( { status: 400, message: errMsg1, errMsg2} )
        }
    
        classType.findOne({ name: body.name }, (err, foundItem) => {
            if (err) {
                reject( { status: 401, error: error, message: errMsg2} )
            }
    
            if (!foundItem) {
                item
                .save()
                .catch(error => {
                    reject( { status: 401, error: error, message: errMsg2} )
                })
            }
    
            resolve()
        }).catch(err => console.log(err))
    })
}

function initUsers(req, res) {
    const items = userData.getUsers();
    // seed user pwds are not encrypted in the data file
    items.forEach(body => {
        const pwd = sha256.hmac('key', body.password)
        body.password = pwd;
    })
    initItems(req, res, items, User, 'Users', 'user')
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
            return;
        }

        return userList;
    });

    characters = await Character.find({ }, (err, charList) => {
        if (err) {
            console.log('Characters not found!');
            return;
        }

        return charList;
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
        'users': users,
        'characters': characters
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
        if (params.characters) {
            // iterate over the characters
            for (const character of params.characters) {
                // set the race id
                let race = character.race;
                race.id = getItemId(DataTypes.RACE, race.name, params);
                // set the ability ids
                for (i = 0; i < character.abilities.length; i++) {
                    let ability = character.abilities[i];
                    ability.id = getItemId(DataTypes.ABILITY, character.abilities[i].name, params)
                }
                // set the edge ids
                for (i = 0; i < character.edges.length; i++) {
                    let edge = character.edges[i];
                    edge.id = getItemId(DataTypes.EDGE, character.edges[i].name, params)
                }
                // set the hindrance ids
                for (i = 0; i < character.hindrances.length; i++) {
                    let hindrance = character.hindrances[i];
                    hindrance.id = getItemId(DataTypes.HINDRANCE, character.hindrances[i].name, params)
                }
                // set the skill ids
                for (i = 0; i < character.skills.length; i++) {
                    let skill = character.skills[i];
                    skill.id = getItemId(DataTypes.SKILL, character.skills[i].name, params)
                }            
                // set the arcaneBackground ids
                for (i = 0; i < character.arcaneBackgrounds.length; i++) {
                    let arcaneBackground = character.arcaneBackgrounds[i];
                    arcaneBackground.id = getItemId(DataTypes.ARCANE_BACKGROUND, character.arcaneBackgrounds[i].name, params)
                }            
                // set the power ids
                for (i = 0; i < character.powers.length; i++) {
                    let power = character.powers[i];
                    power.id = getItemId(DataTypes.POWER, character.powers[i].name, params)
                }  
    
                character.save();
            }
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