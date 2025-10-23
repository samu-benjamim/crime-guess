CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username VARCHAR(50) UNIQUE NOT NULL,
	email VARCHAR(255) UNIQUE NOT NULL,
	password_hash TEXT NOT NULL,
	avatar_url TEXT,
	created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE scenarios (
  id SERIAL PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  description TEXT NOT NULL,
  difficulty VARCHAR(20) DEFAULT 'medium',
  created_by INTEGER REFERENCES users(id) ON DELETE SET NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE candidates (
  id SERIAL PRIMARY KEY,
  scenario_id INTEGER REFERENCES scenarios(id) ON DELETE CASCADE,
  name VARCHAR(120) NOT NULL,
  bio TEXT
);

CREATE TABLE weapons (
  id SERIAL PRIMARY KEY,
  scenario_id INTEGER REFERENCES scenarios(id) ON DELETE CASCADE,
  name VARCHAR(120) NOT NULL,
  description TEXT
);


CREATE TABLE locations (
  id SERIAL PRIMARY KEY,
  scenario_id INTEGER REFERENCES scenarios(id) ON DELETE CASCADE,
  name VARCHAR(120) NOT NULL,
  description TEXT
);

CREATE TABLE clues (
  id SERIAL PRIMARY KEY,
  scenario_id INTEGER REFERENCES scenarios(id) ON DELETE CASCADE,
  text TEXT NOT NULL,
  hint_for_type VARCHAR(20), -- 'killer' | 'weapon' | 'location'
  hint_for_id INTEGER
);

CREATE TABLE solutions (
  scenario_id INTEGER PRIMARY KEY REFERENCES scenarios(id) ON DELETE CASCADE,
  killer_id INTEGER REFERENCES candidates(id),
  weapon_id INTEGER REFERENCES weapons(id),
  location_id INTEGER REFERENCES locations(id)
);

CREATE TABLE attempts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  scenario_id INTEGER REFERENCES scenarios(id) ON DELETE CASCADE,
  guess_killer_id INTEGER REFERENCES candidates(id),
  guess_weapon_id INTEGER REFERENCES weapons(id),
  guess_location_id INTEGER REFERENCES locations(id),
  correct BOOLEAN,
  attempts_before_submission INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE ranking (
  user_id INTEGER PRIMARY KEY REFERENCES users(id),
  solved_count INTEGER DEFAULT 0,
  total_attempts INTEGER DEFAULT 0,
  best_score INTEGER DEFAULT NULL, -- menor número de tentativas
  updated_at TIMESTAMP DEFAULT NOW()
);



