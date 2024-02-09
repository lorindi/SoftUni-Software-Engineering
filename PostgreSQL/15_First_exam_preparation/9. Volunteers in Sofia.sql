SELECT
    v.name AS volunteers,
    v.phone_number,
    SUBSTRING(TRIM(REPLACE(v.address, 'Sofia', '')), 3)
FROM
    volunteers as v
    JOIN volunteers_departments AS vd
        ON vd.id = v.department_id
WHERE 
    vd.department_name = 'Education program assistant'
    AND v.address LIKE '%Sofia%'
ORDER BY v.name;