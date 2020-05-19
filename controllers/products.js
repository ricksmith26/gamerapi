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
