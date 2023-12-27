DELETE FROM employees
WHERE 
    department_id BETWEEN 1 and 2;
-- RETURNING *;
SELECT * FROM employees

-- Изтрии от таблицата employees редовете с които са с department_id между 1 и 2