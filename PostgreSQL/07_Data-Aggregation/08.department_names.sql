SELECT
    id,
    first_name,
    last_name,
    trunc(salary, 2),
    department_id,
    CASE 
        WHEN department_id = 1 THEN 'Management'
        WHEN department_id = 2 THEN 'Kitchen Staff'
        WHEN department_id = 3 THEN 'Service Staff'
        ELSE 'Other'
    END
FROM
    employees;