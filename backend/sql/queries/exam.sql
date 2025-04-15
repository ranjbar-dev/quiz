-- name: GetAvailableExams :many
SELECT * FROM exams WHERE job_id != ANY($1::int[]) AND is_active = TRUE;

-- name: FindExam :one
SELECT * FROM exams WHERE id = $1;

-- name: FindExamResults :many
SELECT * FROM results WHERE exam_id = $1;




