import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';
import Scenarios from './scenarios.model';
import Candidates from './candidates.model';
import Weapons from './weapons.model';
import Locations from './locations.model';
import User from './user.model';

// Tipagem dos atributos
interface AttemptsAttributes {
  id: number;
  correct: boolean;
  attempts_before_submission: number;
}

// Tipagem para criação (id e created_at são opcionais)
export type AttemptsCreationAttributes = Optional<AttemptsAttributes, 'id'>;

// Classe do model
export class Attempts
  extends Model<AttemptsAttributes, AttemptsCreationAttributes>
  implements AttemptsAttributes
{
  public id!: number;
  public correct!: boolean;
  public attempts_before_submission!: number;
}

// Inicialização do model
Attempts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    correct: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    attempts_before_submission: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'attempts',
  },
);

Attempts.belongsTo(User, {
  constraints: true,
  foreignKey: 'id_user',
});
Attempts.belongsTo(Scenarios, {
  constraints: true,
  foreignKey: 'id_Scenario',
});

Attempts.belongsTo(Candidates, {
  constraints: true,
  foreignKey: 'guess_killer_id',
});
Attempts.belongsTo(Locations, {
  constraints: true,
  foreignKey: 'guess_location_id',
});
Attempts.belongsTo(Weapons, {
  constraints: true,
  foreignKey: 'guess_weapon_id',
});

export default Attempts;
