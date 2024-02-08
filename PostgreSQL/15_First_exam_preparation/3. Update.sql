UPDATE 
    animals 
SET 
    owner_id = (SELECT id FROM owners WHERE name = 'Kaloqn Stoqnov')
WHERE 
    owner_id IS NULL;

-- UPDATE 
--     animals 
-- SET 
--     owner_id = 4 
-- WHERE 
--     owner_id IS NULL;