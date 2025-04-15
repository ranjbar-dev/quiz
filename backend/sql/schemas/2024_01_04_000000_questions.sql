CREATE TABLE questions (
  id            SERIAL PRIMARY KEY,
  exam_id       BIGINT NOT NULL DEFAULT 0,
  question      VARCHAR(1000) NOT NULL DEFAULT '',
  score         FLOAT8 NOT NULL DEFAULT 0,
  first_option  VARCHAR(1000) NOT NULL DEFAULT '',
  second_option VARCHAR(1000) NOT NULL DEFAULT '',
  third_option  VARCHAR(1000) NOT NULL DEFAULT '',
  fourth_option VARCHAR(1000) NOT NULL DEFAULT '',
  answer        VARCHAR(1000) NOT NULL DEFAULT '',
  created_at    BIGINT NOT NULL DEFAULT 0
);