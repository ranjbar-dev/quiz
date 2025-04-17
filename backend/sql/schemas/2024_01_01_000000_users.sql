CREATE TABLE users (
  id            SERIAL PRIMARY KEY,
  first_name    VARCHAR(60) NOT NULL DEFAULT '',
  last_name     VARCHAR(60) NOT NULL DEFAULT '',
  national_code VARCHAR(10) NOT NULL DEFAULT '',
  father_name   VARCHAR(60) NOT NULL DEFAULT '',
  gender        SMALLINT NOT NULL DEFAULT 0,
  birth_date    VARCHAR(100) NOT NULL DEFAULT '',
  birth_place   VARCHAR(100) NOT NULL DEFAULT '',
  department    VARCHAR(100) NOT NULL DEFAULT '',
  position      VARCHAR(100) NOT NULL DEFAULT '',
  phone_number  VARCHAR(100) NOT NULL DEFAULT '',
  work_phone    VARCHAR(100) NOT NULL DEFAULT '',
  jobs          VARCHAR(100) NOT NULL DEFAULT '',
  education_level SMALLINT NOT NULL DEFAULT 0,
  password      VARCHAR(100) NOT NULL DEFAULT '',
  created_at    BIGINT NOT NULL DEFAULT 0
);