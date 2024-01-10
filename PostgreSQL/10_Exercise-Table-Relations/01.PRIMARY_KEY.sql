CREATE TABLE products (
	product_name VARCHAR(100)
	
);
INSERT INTO
	products
VALUES
	('Broccoli'),
	('Shampoo'),
	('Toothpaste'),
	('Candy');
ALTER TABLE
	products	
ADD COLUMN
	"id" SERIAL PRIMARY KEY;

-- SELECT * FROM products;






-- CREATE TABLE it_specialists (
--     full_name VARCHAR(50)
-- );
-- INSERT INTO
--     it_specialists
-- VALUES
--     ('Lora Mitova'),
--     ('Lilly Klecharova'),
--     ('Andey Seferov'),
--     ('Georgi Lukanov');
-- ALTER TABLE
--     it_specialists
-- ADD COLUMN
--     "id" SERIAL PRIMARY KEY;
-- SELECT * FROM it_specialists;

-- CREATE TABLE it_specialists:

-- Този блок създава таблица с име "it_specialists".
-- Таблицата има една колона "full_name" с тип VARCHAR(50), 
-- която съхранява символни низове с максимална дължина от 50 символа.

-- INSERT INTO it_specialists VALUES ('Lora Mitova'), ('Lilly Klecharova'), ('Andey Seferov'), ('Georgi Lukanov');

-- С този блок се въвеждат четири реда в таблицата "it_specialists"
--  с имената на четирима IT специалисти.
-- ALTER TABLE it_specialists ADD COLUMN "id" SERIAL PRIMARY KEY;

-- Този блок добавя нова колона "id" към таблицата.
-- Типът на колоната е SERIAL, което означава, че тя автоматично ще 
-- се увеличава с всяко ново въведено ред и се използва като уникален идентификатор.
-- PRIMARY KEY дефинира "id" като основен ключ, което означава, 
-- че стойностите в тази колона трябва да бъдат уникални и не могат да бъдат NULL.

-- SELECT * FROM it_specialists;

-- С този SQL заявка се извеждат всички редове и колони от таблицата "it_specialists". 
-- Това показва текущото съдържание на таблицата след извършването на предишните операции.
-- В резултат, таблицата "it_specialists" в базата данни ще изглежда приблизително така:

-- | id | full_name          |
-- |----|--------------------|
-- | 1  | Lora Mitova        |
-- | 2  | Lilly Klecharova   |
-- | 3  | Andey Seferov      |
-- | 4  | Georgi Lukanov     | 

