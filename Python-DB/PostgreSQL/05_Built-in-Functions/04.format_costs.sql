SELECT 
    title,
    round(cost, 3) AS modified_price
FROM
    books
ORDER BY
    id;