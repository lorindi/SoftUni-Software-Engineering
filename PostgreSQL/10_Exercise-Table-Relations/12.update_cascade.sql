ALTER TABLE
    countries_rivers
ADD CONSTRAINT
    fk_countries_rivers_rivers
FOREIGN KEY
    (river_id)
REFERENCES
    rivers(id)
ON UPDATE CASCADE,

ADD CONSTRAINT
    fk_countries_rivers_countries
FOREIGN KEY
    (country_code)
REFERENCES
    countries(country_code)
ON UPDATE CASCADE;



-- Нека да разгледаме кода подробно:

-- ALTER TABLE countries_rivers
-- ADD CONSTRAINT fk_countries_rivers_rivers
-- FOREIGN KEY (river_id)
-- REFERENCES rivers(id)
-- ON UPDATE CASCADE,

-- fk_countries_rivers_rivers: Това е името на първия външен ключ, който се 
-- добавя към таблицата "countries_rivers" и който е свързан с колоната "river_id".

-- FOREIGN KEY (river_id): Дефинира външния ключ върху колоната "river_id" в
--  таблицата "countries_rivers".

-- REFERENCES rivers(id): Указва, че външният ключ сочи към колоната "id" в таблицата "rivers".

-- ON UPDATE CASCADE: Това определя действие, което да бъде изпълнено, когато
--  стойността на ключа "id" в таблицата "rivers" бъде обновена. С "CASCADE" 
--  се указва, че всички свързани записи в "countries_rivers", които имат 
--  същата стойност в "river_id", също трябва да бъдат обновени.

-- След това имаме втория външен ключ:

-- ADD CONSTRAINT fk_countries_rivers_countries
-- FOREIGN KEY (country_code)
-- REFERENCES countries(country_code)
-- ON UPDATE CASCADE;


-- fk_countries_rivers_countries: Това е името на втория външен ключ, който се добавя
--  към таблицата "countries_rivers" и който е свързан с колоната "country_code".

-- FOREIGN KEY (country_code): Дефинира външния ключ върху колоната "country_code" в 
-- таблицата "countries_rivers".

-- REFERENCES countries(country_code): Указва, че външният ключ сочи към колоната 
-- "country_code" в таблицата "countries".

-- ON UPDATE CASCADE: Подобно на предния външен ключ, тук с "CASCADE" се определя, 
-- че при обновяване на стойността на "country_code" в таблицата "countries", всички 
-- свързани записи в "countries_rivers", които имат същата стойност в "country_code",
--  също трябва да бъдат обновени.