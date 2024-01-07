SELECT 
		DISTINCT
		name,
		area AS "Area (km2)"
FROM 
	cities
ORDER BY name DESC;


-- DISTINCT - Целият запис ще бъде уникален без повтарящи се записи.