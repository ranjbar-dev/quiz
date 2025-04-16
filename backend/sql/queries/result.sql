
-- name: FindResult :one
SELECT * FROM results WHERE id = $1;

-- name: CountUserResultsForExam :one
SELECT COUNT(*) FROM results WHERE user_id = $1 AND exam_id = $2;

-- name: GetResultsFilterStatusAndUserID :many
SELECT * FROM results WHERE user_id = $1 AND status = $2;

-- name: UpdateResultToProcessing :exec
UPDATE results SET status = $2, started_at = $3 WHERE id = $1;

