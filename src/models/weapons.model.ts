import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';
import Scenarios from './scenarios.model';

// Tipagem dos atributos
interface WeaponsAttributes {
  id: number;
  name: string;
  description: string;
}

// Tipagem para criação (id e created_at são opcionais)
export type WeaponsCreationAttributes = Optional<WeaponsAttributes, 'id'>;

// Classe do model
export class Weapons
  extends Model<WeaponsAttributes, WeaponsCreationAttributes>
  implements WeaponsAttributes
{
  public id!: number;
  public name!: string;
  public description!: string;
}

// Inicialização do model
Weapons.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: 'weapons',
  },
);

Weapons.belongsTo(Scenarios, {
  constraints: true,
  foreignKey: 'id_Scenario',
});

export default Weapons;
