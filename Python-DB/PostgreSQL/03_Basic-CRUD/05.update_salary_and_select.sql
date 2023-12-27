-- Промени таблицата employees, като сетнеш salary да бъде += 100, 
-- но само на тези редове на които има като стойност Manager в колоната job_title

UPDATE employees
SET salary = salary + 100
WHERE job_title = 'Manager';

SELECT
    *
WHERE 
    job_title = 'Manager'