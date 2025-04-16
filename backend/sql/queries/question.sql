-- name: GetQuestions :many
SELECT * FROM questions WHERE id = ANY($1::int[]);



