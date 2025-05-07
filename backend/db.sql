CREATE TABLE task (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES "user" (id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    deadline TIMESTAMP NOT NULL,
    status BOOLEAN NOT NULL DEFAULT FALSE,   
    points_reward INT DEFAULT 10,
    completed_at TIMESTAMP
)

CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    level INT DEFAULT 1 REFERENCES level_config (level),
    experience INT DEFAULT 0
)

CREATE TABLE level_config (
    level INT PRIMARY KEY,
    xp_required INT NOT NULL
)

INSERT INTO level_config (level, xp_required) values
(1, 0),
(2, 100),
(3, 300),
(4, 600),
(5, 1000),
(6, 1500),
(7, 2100),
(8, 2800),
(9, 3600),
(10, 4500)