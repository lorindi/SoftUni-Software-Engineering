CREATE DATABASE car_manufacture_db;

CREATE TABLE manufacturers(
	id SERIAL PRIMARY KEY,
	name VARCHAR(50)
);
CREATE TABLE models (
	id INT GENERATED ALWAYS AS IDENTITY (START 1000 INCREMENT 1) PRIMARY KEY,
	model_name VARCHAR(50),
	manufacturer_id INT,
	
	CONSTRAINT fk_models_manufacturers
	FOREIGN KEY (manufacturer_id)
	REFERENCES manufacturers(id)
);
CREATE TABLE production_years (
	id SERIAL PRIMARY KEY,
	established_on DATE,
	manufacturer_id INT, 
	
	CONSTRAINT fk_production_years_manufacturers
	FOREIGN KEY (manufacturer_id) 
	REFERENCES manufacturers(id)
);
INSERT INTO 
	manufacturers(name)
VALUES 
	('BMW'),
	('Tesla'),
	('Lada');
INSERT INTO
	models(model_name, manufacturer_id)
VALUES
	('X1', 1),
	('i6', 1),
	('Model S', 2),
	('Model X', 2),
	('Model 3', 2),
	('Nova', 3);
	
INSERT INTO 
	production_years(established_on, manufacturer_id)
VALUES 
	('1916-03-01', 1),
	('2003-01-01', 2),
	('1966-05-01', 3);



-- Този код създава база данни за управление на информацията за производители на автомобили, 
-- модели на автомобили и години на производство. Да го обясним подробно:

-- CREATE DATABASE car_manufacture_db; - Този ред създава нова база данни с име "car_manufacture_db".

-- CREATE TABLE manufacturers(...); - Тук се създава таблица "manufacturers", която ще съдържа 
-- информация за производителите на автомобили. Таблицата има колони за уникален идентификатор 
-- (id) и име на производителя (name).

-- CREATE TABLE models(...); - Тази таблица се нарича "models" и съдържа информация за моделите 
-- на автомобили. Включва уникален идентификатор (id), име на модела (model_name) и външен ключ 
-- (manufacturer_id), който свързва моделите с таблицата на производителите.

-- CREATE TABLE production_years(...); - Таблицата "production_years" съхранява информация за 
-- годините на производство. Тя включва уникален идентификатор (id), дата на създаване (established_on) 
-- и външен ключ (manufacturer_id), свързващ годините на производство с производителите.

-- INSERT INTO manufacturers(name) VALUES ('BMW'), ('Tesla'), ('Lada'); - Тук се добавят три 
-- записа в таблицата "manufacturers", представляващи производителите BMW, Tesla и Lada.

-- INSERT INTO models(model_name, manufacturer_id) VALUES ...; - Този блок добавя информация за 
-- моделите на автомобилите в таблицата "models". Всяка редка указва име на модел и идентификатор 
-- на производителя, към който принадлежи моделът.

-- INSERT INTO production_years(established_on, manufacturer_id) VALUES ...; - Този блок добавя 
-- информация за годините на производство в таблицата "production_years". Всяка редка включва дата
--  на създаване и идентификатор на производителя.

-- Обобщено, този код създава база данни с три свързани таблиците, представляващи информация за 
-- производители, модели и години на производство на автомобили, и след това добавя няколко записа 
-- в тези таблиците.






-- CONSTRAINT не създава името на ключа, а само задава правило или ограничение за данните в таблицата. 
-- Името на ключа обикновено се задава от вас, когато дефинирате това ограничение.

-- FOREIGN KEY създава външен ключ в таблицата, който установява връзката между текущата таблица и друга таблица.

-- REFERENCES посочва целевата таблица и ключа в нея, към който външният ключ ще сочи.

-- Ето пример, където съчетавате тези елементи:

-- CONSTRAINT fk_production_years_manufacturers
-- FOREIGN KEY (manufacturer_id) 
-- REFERENCES manufacturers(id)


-- fk_production_years_manufacturers е името на външния ключ (може да бъде каквото искате).

-- FOREIGN KEY (manufacturer_id) определя, че колоната manufacturer_id в текущата таблица е външен ключ.

-- REFERENCES manufacturers(id) указва, че външният ключ manufacturer_id трябва да се отнася към колоната 
-- id в таблицата manufacturers. Това задава връзката между текущата таблица и manufacturers чрез външен ключ.