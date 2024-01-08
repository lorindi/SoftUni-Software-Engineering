SELECT
    v.driver_id,
    v.vehicle_type,
    CONCAT(c.first_name, ' ', c.last_name)
FROM
    campers AS c JOIN
        vehicles AS v ON
            v.driver_id = c.id;






-- Този SQL код извлича информация за кемперите и техните превозни средства, като съчетава данни 
-- от две таблици - "campers" (кемпери) и "vehicles" (превозни средства). Вотът обяснява всеки ред от заявката:



-- sql
-- Copy code
-- SELECT
--     v.driver_id,
--     v.vehicle_type,
--     CONCAT(c.first_name, ' ', c.last_name) AS driver_name
-- FROM
--     campers AS c
-- JOIN
--     vehicles AS v ON v.driver_id = c.id;



-- Save to grepper
-- SELECT: Този оператор се използва за избор на конкретни колони от резултатите на заявката.

-- v.driver_id: Избира колоната driver_id от таблицата vehicles, която представлява идентификатора на водача
--  на превозното средство.

-- v.vehicle_type: Избира колоната vehicle_type от таблицата vehicles, която представлява типа на превозното средство.

-- CONCAT(c.first_name, ' ', c.last_name) AS driver_name: Използва функцията CONCAT за комбиниране на 
-- стойностите от колоните first_name и last_name от таблицата campers, създавайки общо име на водача. 
-- Резултатът се нарича driver_name.

-- FROM campers AS c: Указва, че таблицата campers ще бъде реферирана като c в рамките на този заявка.

-- JOIN vehicles AS v ON v.driver_id = c.id: Използва оператора JOIN, за да свърже редовете от таблиците 
-- campers и vehicles чрез условието, че driver_id в таблицата vehicles трябва да съвпада с id в таблицата campers.

-- Този SQL заявка е полезна, ако искате да извлечете информация за водачите на превозни средства и 
-- техните превозни средства, използвайки връзката между таблици чрез driver_id в таблицата vehicles 
-- и id в таблицата campers.