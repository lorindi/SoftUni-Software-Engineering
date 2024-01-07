SELECT 
    e.first_name || ' ' || e.last_name AS "Full Name",
    e.department_id

FROM employees AS e

JOIN
    addresses AS a
        ON
    e.addresses_id = a.id;
    