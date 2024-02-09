SELECT
    a.name AS animal,
	EXTRACT('year' from a.birthdate) AS birth_date,
	at.animal_type
	
FROM
    animals AS a
        LEFT JOIN owners AS o
            ON a.owner_id = o.id
                JOIN animal_types AS at
                    ON a.animal_type_id = at.id
WHERE 
    a.owner_id IS NULL
    AND at.animal_type <> 'Birds'
    AND AGE('01/01/2022', a.birthdate) < '5 years'
ORDER BY a.name;