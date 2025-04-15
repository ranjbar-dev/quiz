CREATE TABLE results (
  id            SERIAL PRIMARY KEY,
  user_id       INT NOT NULL DEFAULT 0,
  exam_id       INT NOT NULL DEFAULT 0,
  questions_ids VARCHAR(1000) NOT NULL DEFAULT '',
  answers       VARCHAR(1000) NOT NULL DEFAULT '',
  status        SMALLINT NOT NULL DEFAULT 0,
  score         FLOAT8 NOT NULL DEFAULT 0,
  started_at    BIGINT NOT NULL DEFAULT 0,
  finished_at   BIGINT NOT NULL DEFAULT 0,
  created_at    BIGINT NOT NULL DEFAULT 0
);