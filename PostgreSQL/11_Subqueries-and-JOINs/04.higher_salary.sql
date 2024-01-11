
SELECT
    count(*)
FROM employees

WHERE 
    salary > (SELECT 
                 AVG(salary)
              FROM
                employees);