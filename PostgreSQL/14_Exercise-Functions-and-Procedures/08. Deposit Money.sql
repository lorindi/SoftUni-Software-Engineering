CREATE OR REPLACE PROCEDURE sp_deposit_money (
    account_id INT,
    amount_money NUMERIC(10, 4)
) AS
$$
BEGIN
    UPDATE accounts
    SET balance = balance + amount_money
    WHERE account_id = id;

END;
$$
LANGUAGE plpgsql;

CALL sp_deposit_money(1, 200);
SELECT * FROM WHERE id=1;