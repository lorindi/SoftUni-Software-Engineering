CREATE OR REPLACE FUNCTION fn_get_volunteers_count_from_department(searched_volunteers_department VARCHAR(30))
RETURNS INT AS
$$
    BEGIN
        RETURN
        (
            SELECT
                COUNT(*)    
            FROM 
                volunteers AS v
                    JOIN volunteers_departments AS vd
                        ON v.department_id = vd.id
            WHERE vd.department_name = searched_volunteers_department
        );
    END;
$$
LANGUAGE plpgsql;

SELECT fn_get_volunteers_count_from_department('Zoo events')