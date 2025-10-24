import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';
import Scenarios from './scenarios.model';
import User from './user.model';
import Attempts from './attempts.model';

// Tipagem dos atributos
interface RankingAttributes {
  id: number;
  solved_count: number;
  best_score: number;
}

// Tipagem para criação (id e created_at são opcionais)
export type RankingCreationAttributes = Optional<RankingAttributes, 'id'>;

// Classe do model
export class Ranking
  extends Model<RankingAttributes, RankingCreationAttributes>
  implements RankingAttributes
{
  public id!: number;
  public solved_count!: number;
  public best_score!: number;
}

// Inicialização do model
Ranking.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    solved_count: {
      type: DataTypes.INTEGER,
    },
    best_score: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    tableName: 'ranking',
  },
);

Ranking.belongsTo(Scenarios, {
  constraints: true,
  foreignKey: 'id_Scenario',
});
Ranking.belongsTo(User, {
  constraints: true,
  foreignKey: 'user_id',
});
Ranking.belongsTo(Attempts, {
  constraints: true,
  foreignKey: 'total_attempts',
});

export default Ranking;
