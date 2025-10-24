import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';
import Scenarios from './scenarios.model';
import Weapons from './weapons.model';
import Candidates from './candidates.model';
import Locations from './locations.model';

// Tipagem dos atributos
interface SolutionsAttributes {
  id: number;
}

// Tipagem para criação (id e created_at são opcionais)
export type SolutionsCreationAttributes = Optional<SolutionsAttributes, 'id'>;

// Classe do model
export class Solutions
  extends Model<SolutionsAttributes, SolutionsCreationAttributes>
  implements SolutionsAttributes
{
  public id!: number;
}

// Inicialização do model
Solutions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'solutions',
  },
);

Solutions.belongsTo(Scenarios, {
  constraints: true,
  foreignKey: 'id_Scenario',
});
Solutions.belongsTo(Weapons, {
  constraints: true,
  foreignKey: 'id_Weapon',
});
Solutions.belongsTo(Candidates, {
  constraints: true,
  foreignKey: 'id_Candidate',
});
Solutions.belongsTo(Locations, {
  constraints: true,
  foreignKey: 'id_Location',
});

export default Solutions;
