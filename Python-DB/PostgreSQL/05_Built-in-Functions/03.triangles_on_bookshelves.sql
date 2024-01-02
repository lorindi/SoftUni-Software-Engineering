SELECT
    id,
    side * height / 2 AS area
FROM
    triangles
ORDER BY id;