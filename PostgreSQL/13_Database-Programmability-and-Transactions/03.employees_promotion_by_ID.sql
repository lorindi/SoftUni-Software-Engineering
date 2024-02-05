CREATE PROCEDURE sp_increase_salary_by_id(id INT)
AS
$$
BEGIN
    IF (SELECT salary FROM employees WHERE employee_id = id) IS NULL THEN
        RETURN;
    ELSE 
        UPDATE employees 
        SET salary = salary + salary * 0.05
        WHERE employee_id = id;
    END IF; 
    COMMIT;
END;
$$
LANGUAGE plpgsql;
