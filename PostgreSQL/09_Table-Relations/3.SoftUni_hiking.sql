SELECT
    r.start_point,
    r.end_point,
    r.leader_id,
    CONCAT(c.first_name, ' ', c.last_name) AS leader_id
FROM
    routes AS r JOIN
        campers AS c
            ON r.leader_id = c.id;

-- JOIN campers AS c ON r.leader_id = c.id: Използва оператора JOIN, 
-- за да свърже редовете от таблиците routes и campers чрез условието, 
-- че leader_id в таблицата routes трябва да съвпада с id в таблицата campers.