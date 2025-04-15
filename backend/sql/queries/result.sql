-- name: CountUserResultsForExam :one
SELECT COUNT(*) FROM results WHERE user_id = $1 AND exam_id = $2;
