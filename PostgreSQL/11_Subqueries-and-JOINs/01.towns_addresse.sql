SELECT
	t.town_id,
	t.name AS town_name,
	a.address_text
FROM
	towns AS t
		JOIN addresses AS a
			ON t.town_id = a.town_id
WHERE   
    t.name IN ('San Francisco', 'Sofia', 'Carnation')
ORDER BY 
    t.town_id, a.address_id;



SELECT
	t.town_id,
	t.name AS town_name,
	a.address_text
FROM
	towns AS t
		JOIN addresses AS a
			USING(town_id) 
WHERE   
    t.name IN ('San Francisco', 'Sofia', 'Carnation')
ORDER BY 
    t.town_id, a.address_id;

-- USING -се използва когато две таблици имат ключ с едно 
-- и също найменование в случаят town_id се повтаря