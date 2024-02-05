SELECT
    count(*)
FROM
    employees AS e
        JOIN addresses AS a
            USING(address_id)
                JOIN towns AS t
                    USING(town_id)
WHERE t.name = 'Sofia'

CREATE OR REPLACE FUNCTION fn_count_employees_by_town(town_name VARCHAR) 
RETURNS INT AS 
$$
    DECLARE
    town_count INT;

    BEGIN
        SELECT
            count(*)
        FROM
            employees AS e
                JOIN addresses AS a
                    USING(address_id)
                        JOIN towns AS t
                            USING(town_id)
        WHERE t.name = town_name
        INTO town_count;
        RETURN town_count;
        
    END
$$
LANGUAGE plpgsql;
SELECT fn_count_employees_by_town('Sofia')




CREATE OR REPLACE FUNCTION fn_count_employees_by_town(town_name VARCHAR) 
RETURNS INT AS 
$$
    DECLARE

    BEGIN 
        RETURN (
            SELECT
                count(*)
            FROM
                employees AS e
                    JOIN addresses AS a
                        USING(address_id)
                            JOIN towns AS t
                                USING(town_id)
            WHERE t.name = town_name

    );
    END
$$
LANGUAGE plpgsql;
