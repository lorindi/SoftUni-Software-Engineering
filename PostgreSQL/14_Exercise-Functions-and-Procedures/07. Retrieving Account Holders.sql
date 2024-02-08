CREATE OR REPLACE PROCEDURE
    sp_retrieving_holders_with_balance_higher_than (
        search_balance NUMERIC
) 
AS
$$
DECLARE 
    holder_info RECORD
BEGIN
    FOR holder_info IN 
    SELECT 
        first_name || ' ' || last_name AS full_name,
        SUM(balance) AS total_balance
    FROM 
        account_holders AS ah
    JOIN    
        accounts AS a
    ON  
        ah.id = a.account_holders_id
    GROUP BY
        full_name
    HAVING 
        SUM(balance > 20000)
    ORDER BY 
        full_name AS
    LOOP    
        RAISE NOTICE '% - %' holder_info.first_name, holder_info.total_balance;
    END LOOP;
END;
$$
LANGUAGE plpgsql;
CALL sp_retrieving_holders_with_balance_higher_than(200000);
