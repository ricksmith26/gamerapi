const {database} = require('./config');
const pgp = require("pg-promise")({ promiseLib: Promise });
const db = pgp(database);

exports.getGames = (req, res ,next) => {
    const id = req.params.id;
    console.log(req.params.id)
    db.many(
        "SELECT * FROM games WHERE games.search_term_id = $1", [id]
    ).then((games) => {
        res.send(games)
    })
    .catch(next)
}

exports.addGame = (req, res ,next) => {
    const {game_name,
        game_description,
        game_more_details,
        game_release_date,
        game_pegi,
        game_genre,
        game_image,
        game_price,
        subcategory_id,
        category_id,
        search_term_id
     } = req.body;
    db
    .one(
      "INSERT INTO games (game_name, game_description, game_more_details, game_release_date, game_pegi, game_genre, game_image, game_price, subcategory_id, category_id, search_term_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *",
      [game_name,
        game_description,
        game_more_details,
        game_release_date,
        game_pegi,
        game_genre,
        game_image,
        game_price,
        subcategory_id,
        category_id,
        search_term_id
    ]
    ).then(game => {
        res.send(game);
    })
    .catch(next)
}
