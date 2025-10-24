import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';
import Scenarios from './scenarios.model';

// Tipagem dos atributos
interface CluesAttributes {
  id: number;
  hint_for_type: string;
  hint: string;
}

// Tipagem para criação (id e created_at são opcionais)
export type CluesCreationAttributes = Optional<CluesAttributes, 'id'>;

// Classe do model
export class Clues
  extends Model<CluesAttributes, CluesCreationAttributes>
  implements CluesAttributes
{
  public id!: number;
  public hint_for_type!: string;
  public hint!: string;
}

// Inicialização do model
Clues.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    hint_for_type: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    hint: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: 'clues',
  },
);

Clues.belongsTo(Scenarios, {
  constraints: true,
  foreignKey: 'id_Scenario',
});

export default Clues;
