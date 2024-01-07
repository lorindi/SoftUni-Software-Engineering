SELECT
	department_id,
	count(*)
FROM
	employees
GROUP BY department_id
ORDER BY department_id;