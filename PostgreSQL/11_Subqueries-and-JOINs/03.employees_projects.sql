SELECT
    e.employee_id,
    CONCAT(e.first_name, ' ', e.last_name) AS full_name,
    p.project_id,
    p.name
FROM    
    employees AS e 
    JOIN employees_projects AS ep
        USING(employee_id)
    JOIN projects AS p 
        USING(project_id)
WHERE project_id = 1;


-- SELECT: Операторът SELECT се използва за избиране на конкретни колони от таблиците.

-- e.employee_id, CONCAT(e.first_name, ' ', e.last_name) AS full_name, p.project_id, 
-- p.name: Това са колоните, които ще бъдат избрани в резултата на заявката. full_name 
-- е конкатенирано име, което се създава от first_name и last_name на служителя.

-- FROM employees AS e: Определя таблицата "employees" като източник на данни и я нарича 
-- "e" (псевдоним). Това улеснява писането на заявката, особено когато се използват повече
--  от една таблица.

-- JOIN employees_projects AS ep USING(employee_id): Използва се INNER JOIN (чрез ключовата дума JOIN)
--  между таблиците "employees" и "employees_projects" чрез общата колона "employee_id".
--   Това свързва информацията за служителите с техните проекти.

-- JOIN projects AS p USING(project_id): Отново се използва INNER JOIN, този път между резултата
--  от предишния JOIN и таблицата "projects", чрез общата колона "project_id". Това добавя
--   информация за съответните проекти.

-- WHERE project_id = 1: Прилага филтър, който ограничава резултата до редове, където стойността 
-- на "project_id" е равна на 1.

-- Така, крайният резултат ще включва информация за служителите (идентификационен номер, пълно име)
--  и техните проекти, където "project_id" е равен на 1.