const {pgp, db} = require('./config');

exports.getProductsByTerm = (req, res ,next) => {
    const id = req.params.id;
    db.many(
        "SELECT * FROM products WHERE products.search_term_id = $1", [id]
    ).then((games) => {
        res.send(games)
    })
    .catch(next)
}

exports.getProductsBySubcategory = (req, res ,next) => {
    const id = req.params.id;
    db.many(
        "SELECT * FROM products WHERE products.subcategory_id = $1", [id]
    ).then((games) => {
        res.send(games)
    })
    .catch(next)
}

exports.addProduct = (req, res ,next) => {
    const {
        product_name,
        product_description,
        product_more_details,
        product_release_date,
        product_pegi,
        product_genre,
        product_images,
        product_price,
        subcategory_id,
        category_id,
        search_term_id
     } = req.body;
    db
    .one(
      "INSERT INTO products (product_name, product_description, product_more_details, product_release_date, product_pegi, product_genre, product_images, product_price, subcategory_id, category_id, search_term_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *",
      [product_name,
        product_description,
        product_more_details,
        product_release_date,
        product_pegi,
        product_genre,
        product_images,
        product_price,
        subcategory_id,
        category_id,
        search_term_id
    ]
    ).then(produect => {
        res.send(produect);
    })
    .catch(next)
}

exports.getProductById = (req, res ,next) => {
    const id = req.params.id;
    db.many(
        "SELECT * FROM products WHERE products.product_id = $1", [id]
    ).then((game) => {
        res.send(game)
    })
    .catch(next)
}

exports.addImg = (req, res, next) => {
    const {image, brand} = req.body;
    db.one(
        'INSERT INTO brand_images (image, brand) VALUES ($1, $2) RETURNING *;',
        [
            image,
            brand
        ]
    ).then((image) => {
        res.send(image)
    }).catch(next)
}

exports.getImg = (req, res, next) => {
    const brand = req.params.brand;
    db.one(
        'SELECT * FROM brand_images WHERE brand = $1;',
        [brand]
    ).then((image) => {
        res.send(image)
    }).catch(next)
}

exports.getSaleGames = (req, res, next) => {
    return Promise.all([
        getPs4Games(),
        getXboxGames()
    ]).then(([ps4Games, xboxGames]) => {
        res.send([...ps4Games, ...xboxGames])
    }).catch(next)
}

exports.getSaleHardware = (req, res, next) => {
    return Promise.all([
        getPs4Console(),
        getPs4Accessories(),
        getPs4VR(),
        getXboxConsole(),
        getXboxAccessories()

    ]).then(([ps4Console, ps4Accessories, ps4Vr, xboxConsole, xboxAccessories]) => {
        res.send([...ps4Console, ...ps4Accessories, ...ps4Vr, ...xboxConsole, ...xboxAccessories])
    }).catch(next)
}

exports.getTitle = async (req, res, next) => {

    const { term, subcategory } = req.body;
    if (term !== 'none') {
        return getTermName(term).then(search_term => {
            db.one('SELECT * FROM subcategories')
        })
   
    } else {
        return getSubcategoryName(subcategory)
            .then(subcategory => {
                const name = `${subcategory.subcategory_name}`;

                res.send(name)
            }).catch(next)
    }
}

exports.getSearchItems = (req, res, next) => {
    const search = req.params.search;
    db.many(
        `SELECT * FROM products WHERE lower(product_name) LIKE '${search.toLowerCase()}%';`,
    ).then((searchResults) => {
        res.send(searchResults)
    }).catch(next)
}

exports.getMoreLikeThis = (req, res, next) => {
    const id = req.params.id;
    return db
        .many('SELECT * FROM products WHERE search_term_id = $1 ORDER BY random() LIMIT 5;',
        id
        ).then((others) => {
            res.send(others)
        }).catch(next)
}

const getPs4Games = async () => {
	return db
		.many('SELECT * FROM products WHERE subcategory_id = 1 ORDER BY random() LIMIT 2;')
		.then(games => {
			return games;
		})
}
const getXboxGames = async () => {
	return db
		.many('SELECT * FROM products WHERE subcategory_id = 6 ORDER BY random() LIMIT 3;')
		.then(games => {
			return games;
		})
}

const getPs4Console = async () => {
    return db
		.many('SELECT * FROM products WHERE subcategory_id = 2 ORDER BY random() LIMIT 1;')
		.then(console => {
			return console;
		})
}

const getPs4Accessories = async () => {
    return db
		.many('SELECT * FROM products WHERE subcategory_id = 4 ORDER BY random() LIMIT 1;')
		.then(console => {
			return console;
		})
}

const getPs4VR = async () => {
    return db
		.many('SELECT * FROM products WHERE subcategory_id = 3 ORDER BY random() LIMIT 1;')
		.then(console => {
			return console;
		})
}

const getXboxConsole = async () => {
    return db
		.many('SELECT * FROM products WHERE subcategory_id = 7 ORDER BY random() LIMIT 1;')
		.then(console => {
			return console;
		})
}

const getXboxAccessories =  async () => {
    return db
		.many('SELECT * FROM products WHERE subcategory_id = 8 ORDER BY random() LIMIT 1;')
		.then(console => {
			return console;
		})
}

const getTermName = async (id) => {
    return db
        .one('SELECT search_term, search_term, subcategory_name FROM search_terms INNER JOIN subcategories ON subcategories.subcategory_id = search_terms.subcategory_id WHERE search_terms.search_term_id = 35; $1',
         [id])
        .then(term => {
            return term;
        })
}

const getSubcategoryName = async (id) => {
    return db
        .one('SELECT  FROM subcategories WHERE subcategory_id = $1', [id])
        .then(subcategory => {
            return subcategory
        })
}

