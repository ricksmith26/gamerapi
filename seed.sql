 
-- DROP DATABASE IF EXISTS game_shack_db;
-- CREATE DATABASE game_shack_db;
-- \c game_shack_db;


CREATE TABLE categories
(
    category_id: SERIAL PRIMARY KEY,
    category_name: VARCHAR
)


CREATE TABLE subcategories
(
    subcategory_id: SERIAL PRIMARY KEY,
    subcategory_name: VARCHAR,
    subcategory_link: VARCHAR,
    FOREIGN KEY (category_id) REFERENCES areas(category_id)
)

CREATE TABLE search_terms
(
    search_term_id: SERIAL PRIMARY KEY,
    search_term: VARCHAR,
    search_term_link: VARCHAR,
    FOREIGN KEY (subcategory_id) REFERENCES subcategory(subcategory_id)
)

CREATE games
(
    game_id SERIAL PRIMARY KEY,
    game_name VARCHAR,
    game_description VARCHAR,
    game_more_details VARCHAR,
    game_release_date VARCHAR,
    game_pegi SMALLINT,
    game_genre VARCHAR,
    game_image VARCHAR,
    game_price VARCHAR,
    subcategory_id integer references subcategories(subcategory_id)
    category_id integer references categories(category_id)
)





INSERT INTO categories
(category_name)
VALUES
('PlayStation')
('Xbox One')
('Nintendo')
('PC Gaming')
('Coming Soon')
('Pre-Owned')