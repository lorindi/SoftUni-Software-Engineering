SELECT
    COUNT(*) AS countries_without_rivers
FROM 
    countries
LEFT JOIN
    countries_rivers
ON 
    countries.country_code = countries_rivers.country_code
WHERE
    countries_rivers.country_code IS NULL;




SELECT
    COUNT(*) AS countries_without_rivers
FROM 
    countries
LEFT JOIN
    countries_rivers
USING
    (country_code)
WHERE
    countries_rivers.country_code IS NULL;

-- Искам да преброиш всички редове, които изкарваме.

-- Взимаме от ляво таблицата countries, защото искаме да разберем 
-- всички държави в който нямаме реки, а не всички реки в които няма държави.

-- LEFT JOIN
--     countries_rivers ще вземе държавите от ляво, независимо, 
--     че в някои редове може да има стойност NULL, ако се покрива това условие :
--     countries.country_code = countries_rivers.country_code ще се свържат заедно, 
--     ако не покрива условието, ще имаме държава и NULL стойност.