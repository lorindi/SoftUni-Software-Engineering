CREATE OR REPLACE PROCEDURE sp_animals_with_owners_or_not(
    IN animal_name VARCHAR(30),
    OUT o_name VARCHAR(30)
)
AS
$$
    BEGIN
        SELECT 
            o.name
        FROM 
            owners AS o
                LEFT JOIN animals AS a
                    ON o.id = a.owner_id
        WHERE a.name = animal_name
        INTO o_name;
        IF o_name IS NULL THEN
            o_name := 'For adoption';
        END IF;
        RETURN;
    END;
$$
LANGUAGE plpgsql;