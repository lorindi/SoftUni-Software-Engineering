CREATE DATABASE photo_shooting_db;

CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    date DATE
);

CREATE TABLE photos (
    id SERIAL PRIMARY KEY,
    url VARCHAR(50),
    place VARCHAR(50),
    customer_id INT,

    CONSTRAINT fk_photos_customers 
    FOREIGN KEY (customer_id) 
    REFERENCES customers(id)
);

INSERT INTO
    customers(name, date)
VALUES
    ('Bella', '2022-03-25'),
    -- 'Bella' е с id - 1
    ('Philip', '2022-07-05');
    -- 'Philip' е с id - 2

INSERT INTO
    photos(url, place, customer_id)
VALUES
    -- Всички с id 1 ще бъдат при 'Bella', а останалите с id 2 ще бъдат при 'Philip'.
    ('bella_1111.com', 'National Theatre', 1),
    ('bella_1112.com', 'Largo', 1),
    ('bella_1113.com', 'The View Restaurant', 1),
    ('philip_1121.com', 'Old Town', 2),
    ('philip_1122.com', 'Rowing Canal', 2),
    ('philip_1123.com', 'Roman Theater', 2);



-- CONSTRAINT  - ограничението, че customer_id INT, id SERIAL PRIMARY KEY трябва да бъдат свързани
--  или иначе казано customer_id трябва да е съществъваща колона в таблицата costumers.
-- fk_photos_customers 
-- fk - FOREIGN KEY в релационните бази данни е механизъм, който установява връзка между данни в две таблици.
-- photos - таблицата в която се намираме.
-- customers - таблицата към която реферираме.
-- FOREIGN KEY (customer_id) - е върху customer_id от нашата таблица 'photos' в моментът.
-- REFERENCES customers(id) - реферира customers(id) от таблицата 'costumers'
-- Създай таблицата 'costumers' и създай таблица 'photos'.'photos' искаме да има 'customer_id', 
-- което задължително трябва да съществуваща стойност в колоната 'id' на таблицата 'costumers',.
-- Ако в таблицата 'costumers' има създадени записи id - 1 , 2 , 3, то задължително, 
-- това което ще има в customer_id ще бъде едно от тези трите числа.
-- Не може да бъде 4. Защо? Защото сме сложили CONSTRAINT - има ограничение, 
-- което казва че тези 2те неща трябва да се провери, дали са валидно свързани.