CREATE TABLE exams (
  id            SERIAL PRIMARY KEY,
  job_id        INT NOT NULL DEFAULT 0,
  name          VARCHAR(100) NOT NULL DEFAULT '',
  description   VARCHAR(100) NOT NULL DEFAULT '',
  total_score   FLOAT8 NOT NULL DEFAULT 0,
  pass_score    FLOAT8 NOT NULL DEFAULT 0,
  duration      BIGINT NOT NULL DEFAULT 0,
  is_active     BOOLEAN NOT NULL DEFAULT FALSE,
  password      VARCHAR(100) NOT NULL DEFAULT '',
  allowed_ips   VARCHAR(100) NOT NULL DEFAULT '',
  created_at    BIGINT NOT NULL DEFAULT 0
);