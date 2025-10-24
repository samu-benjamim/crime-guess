import { sequelize } from '../config/database';
import Attempts from '../models/attempts.model';
import Candidates from '../models/candidates.model';
import Clues from '../models/clues.models';
import Locations from '../models/locations.model';
import Ranking from '../models/ranking.model';
import Scenarios from '../models/scenarios.model';
import Solutions from '../models/solutions.model';
import User from '../models/user.model';
import Weapons from '../models/weapons.model';

export async function syncDatabase() {
  const database = sequelize;
  const user = User;
  const scenarios = Scenarios;
  const weapons = Weapons;
  const attempts = Attempts;
  const candidates = Candidates;
  const clues = Clues;
  const locations = Locations;
  const ranking = Ranking;
  const solutions = Solutions;
  await database.sync();
  console.log('Banco sincronizado');
}
