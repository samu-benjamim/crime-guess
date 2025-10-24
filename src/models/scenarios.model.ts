import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

// Tipagem dos atributos
interface ScenariosAttributes {
  id: number;
  title: string;
  description: string;
  difficulty: string;
}

// Tipagem para criação (id e created_at são opcionais)
export type ScenariosCreationAttributes = Optional<ScenariosAttributes, 'id'>;

// Classe do model
export class Scenarios
  extends Model<ScenariosAttributes, ScenariosCreationAttributes>
  implements ScenariosAttributes
{
  public id!: number;
  public title!: string;
  public description!: string;
  public difficulty!: string;
}

// Inicialização do model
Scenarios.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    difficulty: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'scenarios',
  },
);

export default Scenarios;
