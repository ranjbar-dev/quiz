CREATE TABLE jobs (
  id            SERIAL PRIMARY KEY,
  name          VARCHAR(100) NOT NULL DEFAULT '',
  description   VARCHAR(100) NOT NULL DEFAULT '',
  created_at    BIGINT NOT NULL DEFAULT 0
);