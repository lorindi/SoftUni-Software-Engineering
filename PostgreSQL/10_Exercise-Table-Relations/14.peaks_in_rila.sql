SELECT
    mountain_range,
    peak_name,
    elevation
FROM
    peaks
JOIN
    mountains
ON
    mountain_id = mountains.id
WHERE 
    mountain_range LIKE '%Rila%'
ORDER BY
    elevation DESC;

-- Вземи peaks таблицата и mountains таблицата и ги съедини, 
-- където ключа на планината, 
-- отговаря с ключът който има във върха.
-- Или иначе казано, например върхът Мусала, 
-- Мусала има mountains_id = 3, в случая се оказва че mountains_id = 3 отговаря на РИЛА
-- и ние свързваме Рила с Мусала и  казваме: Мусала се намира в Рила