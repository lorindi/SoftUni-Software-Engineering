SELECT
    a.name,
    a.country,
    b.booked_at::date
FROM
    apartments AS a
        RIGHT JOIN
            bookings AS b
USING   
    (booking_id)
LIMIT 10;