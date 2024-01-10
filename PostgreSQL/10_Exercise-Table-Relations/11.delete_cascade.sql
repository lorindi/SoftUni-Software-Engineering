ALTER TABLE 
    countries
ADD CONSTRAINT 
    fk_countries_continents
FOREIGN KEY 
    (continent_code)
REFERENCES 
    continents(continent_code)
ON DELETE CASCADE,

ADD CONSTRAINT
    fk_countries_currencies
FOREIGN KEY     
    (currency_code)
REFERENCES
    currencies(currency_code)
ON DELETE CASCADE;



-- Този SQL код използва оператора ALTER TABLE, за да добави два външни ключа (FOREIGN KEY) 
-- към таблицата "countries". Нека да разгледаме кода подробно:

-- ALTER TABLE countries
-- ADD CONSTRAINT fk_countries_continents
-- FOREIGN KEY (continent_code)
-- REFERENCES continents(continent_code)
-- ON DELETE CASCADE,


-- fk_countries_continents: Това е името на външния ключ, който се добавя към таблицата "countries"
--  и който е свързан с колоната "continent_code".

-- FOREIGN KEY (continent_code): Дефинира външния ключ върху колоната "continent_code" в таблицата 
-- "countries".

-- REFERENCES continents(continent_code): Указва, че външният ключ сочи към колоната "continent_code"
--  в таблицата "continents".

-- ON DELETE CASCADE: Това определя действие, което да бъде изпълнено, когато се изтрие запис от 
-- родителската таблица "continents". В случая с думата "CASCADE", това означава, че при изтриване 
-- на запис от "continents", всички свързани записи в "countries", които имат същата стойност в 
-- "continent_code", също ще бъдат изтрити.
-- След това имаме втория външен ключ:



-- ADD CONSTRAINT fk_countries_currencies
-- FOREIGN KEY (currency_code)
-- REFERENCES currencies(currency_code)
-- ON DELETE CASCADE;


-- fk_countries_currencies: Това е името на втория външен ключ, който се добавя към таблицата 
-- "countries" и който е свързан с колоната "currency_code".

-- FOREIGN KEY (currency_code): Дефинира външния ключ върху колоната "currency_code" в таблицата 
-- "countries".

-- REFERENCES currencies(currency_code): Указва, че външният ключ сочи към колоната "currency_code"
--  в таблицата "currencies".

-- ON DELETE CASCADE: Подобно на предния външен ключ, тук с "CASCADE" се определя, че при изтриване 
-- на запис от "currencies", всички свързани записи в "countries", 
-- които имат същата стойност в "currency_code", също ще бъдат изтрити.