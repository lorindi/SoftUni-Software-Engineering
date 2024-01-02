Дай всички titles от таблицата books на които, ако на заглавието от първата до третата буква са равни на 'The', 
тогава ни ги покажи всичките.

SELECT
    title
FROM
    books
WHERE SUBSTRING(title, 1, 3) = 'The'
ORDER BY id



SELECT
    title
FROM
    books
WHERE title LIKE 'The%'
ORDER BY id;


SELECT
    title
FROM
    books
WHERE left(title, 3) = 'The'
ORDER BY id;