const {pgp, db} = require('./config');
// const {categories, subCategories, searchTerms} = require('./navMenuItems');
// const {data} = require('./data/seedData');
const imageToBase64 = require('image-to-base64');
const randtoken = require('rand-token');
// import * as axios from 'axios';
// const xbox = require('./data/XboxFront.jpg');
// const ps4 = '';


const momentRandom = require('moment-random');

const pegis = [ 6, 7, 12, 15, 18];

const moment = require('moment');

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const more_details = '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"'
const data = {

    ActionAdventure: [
        'Assassins Creed Valhalla',
        'Lego Star Wars',
        'Tom Clancy\'s Rainbow Six',
        'Grand Theft Auto',
        'Death Stranding',
        'Marvel\'sAvengers',
        'Remnant',
        'LEGO Marvel Collection',
        'Watch Dogs Legion',
        'Crash Bandicoot',
        'The Last of Us',
        'Red Dead Redemption2',
        'God of War',
        'Halo 5',
        'Destroy All Humans',
        'Uncharted',
        'Assassin\'s Creed: Origins',
        'Marvel\'s Iron Man',
        'Farcry: Primal',
        'Ace Combat',
        'Batman: The Telltale Series'
    ],
    FamilyKids: [
        'LEGO Start Wars: The Skywalker Saga',
        'Minecraft',
        'Spongebob SquarePants',
        'Fruit Ninja',
        'LEGO Harry Potter Collection',
        'Jumanji',
        'LEGO Batman Beyond',
        'Sonic Mania',
        'Delivery to the Moon',
        'The Incredibles',
        'Bee Simulator',
        'LEGO The Hobbit Videogame',
        'Ice Age',
        'Portal Knights',
        'Harvest Moon',
        'Yoku\'s Island Express',
        'Hello Neighbor',
        'Rocket League'
    ],
    Fighting: [
        'Ghost of Tsushima',
        'Streets of Rage 4',
        'Dragon Ball',
        'For Honour',
        'Tekken 7',
        'Injustice 2',
        'Sonics Forces',
        'Street Fighter V',
        'Soul Calibur VI',
        'Shinobi Striker',
        'Gundam Versus',
        'Injustice',
        'Mortal Combat X',
        'Shadow Warrior',
        'Heart & Slash',
        'One Pirate Warriors',
        'Aragami',
        'Mortal Combat XL',
        'BlazBlue Central Fiction'
    ],
    Horror: [
        'Resident Evil',
        'Dying Light 2',
        'The Dark Pictures Anthology: Little Hope',
        'Daymare: 1998 Black Edition',
        'Until Dawn',
        'Alien Isolation',
        'Paper Dolls',
        'Resident Evil 4 HD Remake',
        'Maid of Sker',
        'Friday the 13th',
        'Killing Floor Double Feature',
        'The Impatient',
        'Resident Evil: Revelations',
        'The Evil Within 2',
        'We Happy Few',
        'Dont\'t Know Twice',
        'Black Mirror',
        'Here The Lie'
    ],
    Racing: [
        'Dirt 5',
        'F1 2020',
        'Gran Turismo Sport',
        'Assetto Corsa Competizone',
        'Descenders',
        'Need For Speed 1',
        'Need For Speed 2',
        'Need For Speed 3',
        'The Crew',
        'The Crew 2',
        'The Crew 3',
        'Dirty Rally',
        'Moto GP',
        'Ride 2',
        'Ride 3',
        'Ride 4',
        'OnRush',
        'Xenon',
        'Dirt 4',
        'VR Karts',
        'ATV Renegades'
    ],
    RPG: [
        'Sakura Wars',
        'Skyrim',
        'Horizon Zero',
        'Witcher',
        'Witcher 2',
        'Witcher 3 Wild Hunt',
        'ARK Survival Evolved',
        'Anthem',
        'Fallout 76',
        'Fairy Tail',
        'Monster Hunter',
        'Destiny',
        'Destiny 2',
        'Fallout 4',
        'Deus Ex',
        'Blackguards 2',
        'Dragon Age',
        'Wasteland 3',
        'Elder Scroll Online',
        'Morrowwind',
        'Elex',
        'Code Vein',
        'Bloodborne'
    ],
    Shooter: [
        'Saints Row',
        'Doom Eternal',
        'Outriders',
        'Call of Duty: Infinite Warfare',
        'BattleField 1',
        'Call of Duty: Black Ops 4',
        'Evolve',
        'Superhot VR',
        'Farcry 4',
        'Titanfall 2',
        'Iron Fury',
        'Blood and Truth',
        'Time Carnage',
        'Overwatch',
        'Sniper Elite',
        'Bulletstorm Full Clip Edition',
        'Metal Gear Solid',
        'Battlefield Hardline',
        'Battlefield 4',
        'Raid',
        'The Order',
        'Prey'
    ],
    Simulation: [
        'The Sims',
        'House Flipper',
        'Railway Empire',
        'Minecraft: Story Mode',
        'Real Farm',
        'Goat Simulator',
        'Ultra Wings',
        'Real Farm',
        'Snooker 19',
        'Abuza',
        'Professional Farmer 2017',
        'Tour De France',
        'The Silver Case',
        'The hustle Kings',
        'The Shop Keep',
        'City: Skylines',
        'Constructor',
        'Tropico 5',
        'Real Flight Simulator'

    ],
    Sport: [
        'Tony Hawk\'s Pro Skater 1',
        'Tony Hawk\'s Pro Skater 2',
        'Tony Hawk\'s Pro Skater 3',
        'Skaket XL',
        'FIFA 15',
        'FIFA 16',
        'FIFA 17',
        'Madden NFL 21',
        'Rocket League',
        'WWE 2K18',
        'Creed',
        'BNA 2K14',
        'Madden 18',
        'PES 2016',
        'Infinate Air',
        'Steep',
        'NHL 18',
        'Pro Evo 2018',
        'Vr Ping Pong',
        'Kick Off Revival',
        'Rugby League 16',
        'Rugby League 18',
        'Rugby League 20',
    ],
    Strategy: [
        'X-Com',
        'Kronos',
        'Valhalla',
        'Valkria',
        'Desperados III',
        'Minecraft',
        'Sudden Strike 4',
        'Bladestorm Nighmare',
        'Halo Wars',
        'Halo Wars 2',
        'Hitman 2',
        'Quar',
        'Invaders',
        'Extinction',
        'Aven Colony',
        'Toki Tori',
        'Dungeons 3',
        'X-Com 2',
        'Reus',
        'Pure Chess',
        'Poker'
    ]

}

const database = require('./config');

var knex = require('knex')({
    client: 'pg',
    version: '8.2.1',
    connection: {
      host : database.host,
      user : database.user,
      password : database.password,
      database : database.database
    }
  });


const getIndex = (i) => {
    if (i === 0) {
        return 'PS4';
    }
    if (i === 1) {
        return 'XBOX'
    }
    if (i === 2) {
        return 'SWITCH'
    }
}

// exports.seedData = async (res, req, next) => {
//     Promise.all([categories(), subCategories(), searchTerms()])
// 		.then(([categories, subCategories, searchTerms]) => {
// 			const menuItems = categories.map( async(category, i) => {
//                 if (i >= 3) {
//                     return;
//                 }
//                 console.log(i,category)
//                 const brand = getIndex(i);
//                 // console.log('>>>>>>BRAND', brand)
//                 const image = await  db.one(
//                     'SELECT * FROM brand_images WHERE brand = $1;',
//                     [brand]
//                 ).catch(next)
//                 console.log(image, 'IMAGE<<<<<<<<<<<<<<<<<,,,' ,i)
// 				return {
// 					...category,
// 					subcategories: subCategories.forEach(async (subCategory) => {
//                         if (subCategory.subcategory_name.toLowerCase().includes('games')){
//                             searchTerms.forEach((term) => {
//                                 // console.log('>>>>>TERM', term.search_term_link, term)
//                                 if (term.subcategory_id  === subCategory.subcategory_id && i < 3) {
//                                     data[term.search_term_link.split('/')[1]].forEach(async(name) => {
//                                         // console.log(term, subCategory.subcategory_id, '<<<<####')
//                                         await db.one(
//                                             'INSERT INTO products (product_name, product_description, product_more_details, product_release_date, product_pegi, product_genre, product_images, product_price, subcategory_id, category_id, search_term_id, bundle_ids) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)',
//                                             [
//                                                 name,
//                                                 description,
//                                                 more_details,
//                                                 moment(new Date(+(new Date()) - Math.floor(Math.random()*1000000000000))).format('DD/MM/YYYY'),
//                                                 pegis[Math.floor(Math.random() * 5) + 1],
//                                                 term.search_term,
//                                                 image.image,
//                                                 randomNumberGenerator(10, 50),
//                                                 subCategory.subcategory_id,
//                                                 category.category_id,
//                                                 term.search_term_id,
//                                                 'Test',
//                                                 // randtoken.generate(16)

//                                             ]
//                                         )
//                                     })
//                                 }
//                             })
//                         }
//                     })
// 				}
// 			})
//             // console.log(menuItems, 'meniItems,<<<<<<<<<<<<,,,')
// 		}).catch(next)
// }

// const getImage = () => {
//     imageToBase64(xbox) // you can also to use url
//     .then(
//         (response) => {
//             console.log(response); //cGF0aC90by9maWxlLmpwZw==7
//             return response;
//         }
//     )
// }

const categories = async () => {
	return db
		.many("SELECT * FROM categories ORDER BY categories.category_id ASC;")
		.then(categories => {

			return categories;
		})
}

const subCategories = async () => {
	return db
		.many("SELECT * FROM subCategories;")
		.then(subCategories => {

			return subCategories;
		})
}

const searchTerms = async () => {
	return db
		.many("SELECT * FROM search_terms;")
		.then(searchTerms => {
			return searchTerms;
		})
}


function randomNumberGenerator(min = 0, max = 1, fractionDigits = 0, inclusive = true) {
    const precision = Math.pow(10, Math.max(fractionDigits, 0));
    const scaledMax = max * precision;
    const scaledMin = min * precision;
    const offset = inclusive ? 1 : 0;
    const num = Math.floor(Math.random() * (scaledMax - scaledMin + offset)) + scaledMin;
  
    return num / precision;
  };
// seedData();

// console.log( getImage() )

