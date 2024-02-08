DELETE from volunteers_departments
WHERE
    id = (
        SELECT
            id
        FROM
            volunteers_departments
        WHERE
            department_name = 'Education program assistant'
    );