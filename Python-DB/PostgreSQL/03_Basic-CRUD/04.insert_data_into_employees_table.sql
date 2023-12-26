INSERT INTO employees (
    first_name,
    last_name,
    job_title,
    department_id,
    salary
    )
VALUES
    ('Samantha', 'Young', 'Housekeeping', 4, 900),
    ('Roger', 'Palmer', 'Waiter', 3, 928.33)
-- Вместо SELECT може да използваме и:
RETURNING *
-- RETURNING * Връща всички послени записи,които сме записали.

-- SELECT * FROM employees
