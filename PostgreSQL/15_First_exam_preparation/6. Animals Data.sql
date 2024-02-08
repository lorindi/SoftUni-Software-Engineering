SELECT
    a.name,
    at.animal_type,
    to_char(a.birthdate, 'DD.MM.YYYY') AS birthdate
FROM
    animals AS a
        JOIN animal_types AS at
            ON at.id = a.animal_type_id;
ORDER BY name;