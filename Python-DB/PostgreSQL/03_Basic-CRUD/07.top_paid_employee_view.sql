CREATE VIEW top_paid_employee_view
AS
SELECT 
	*
FROM
	employees
ORDER BY salary DESC
LIMIT 1;
SELECT * FROM top_paid_employee_view;