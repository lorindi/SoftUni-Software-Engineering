CREATE TABLE mountains (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50)
);
CREATE TABLE peaks(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    mountain_id INT,
    CONSTRAINT fk_mountain_id
        FOREIGN KEY (mountain_id)
            REFERENCES mountains(id)
                ON DELETE CASCADE
);


-- Този код създава две таблиците в релационна база данни - "mountains" и "peaks", 
-- и задава външен ключ (foreign key) между тях с налагане на ограничение за външния ключ.

-- Създаване на таблица "mountains":

-- id SERIAL PRIMARY KEY: Това дефинира колоната "id" като SERIAL, което автоматично 
-- генерира уникални цели числа за всяко вмъкване. PRIMARY KEY указва, че "id" е ключ 
-- за индексиране и уникалност на редовете в таблицата.
-- name VARCHAR(50): Това дефинира колоната "name" като символен низ с максимална дължина от 50 символа.
-- Създаване на таблица "peaks":

-- id SERIAL PRIMARY KEY: Като и в "mountains", "id" е уникален идентификатор за всяка запис.
-- name VARCHAR(50): "name" е символен низ с максимална дължина от 50 символа.
-- mountain_id INT: Тази колона съхранява идентификатора на планината, към която принадлежи върхът.
-- CONSTRAINT fk_mountain_id FOREIGN KEY (mountain_id) REFERENCES mountains(id) 
-- ON DELETE CASCADE: Този ред дефинира външен ключ ("fk_mountain_id"), който свързва 
-- "mountain_id" в таблицата "peaks" с "id" в таблицата "mountains". Това означава, 
-- че стойностите в "mountain_id" в "peaks" трябва да съвпадат със стойностите в "id" 
-- в "mountains". Опцията "ON DELETE CASCADE" означава, че ако се изтрие запис от "mountains",
--  всички записи в "peaks", които имат съответстващата "mountain_id", ще бъдат изтрити автоматично.

-- Този дизайн на база данни е полезен, ако искате да представите свързаност между 
-- планини и техните върхове, като използвате външен ключ за да поддържате цялост на данните 
-- и опцията "ON DELETE CASCADE" за автоматично изтриване на съответните върхове при изтриване 
-- на планината, към която принадлежат.