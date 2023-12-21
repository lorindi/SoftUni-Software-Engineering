-- 1.Create a TABLE
CREATE TABLE IF NOT EXISTS minions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    age INTEGER,
);