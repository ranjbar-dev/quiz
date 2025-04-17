-- name: FindUser :one
SELECT * FROM users WHERE id = $1;

-- name: UpdateUser :one
UPDATE users SET first_name = $2, last_name = $3, national_code = $4, father_name = $5, gender = $6, birth_date = $7, birth_place = $8, department = $9, position = $10, phone_number = $11, work_phone = $12, education_level = $13 WHERE id = $1 RETURNING *;

-- name: UpdateUserPassword :exec
UPDATE users SET password = $2 WHERE id = $1;

