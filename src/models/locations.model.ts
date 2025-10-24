import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';
import Scenarios from './scenarios.model';

// Tipagem dos atributos
interface LocationsAttributes {
  id: number;
  name: string;
  description: string;
}

// Tipagem para criação (id e created_at são opcionais)
export type LocationsCreationAttributes = Optional<LocationsAttributes, 'id'>;

// Classe do model
export class Locations
  extends Model<LocationsAttributes, LocationsCreationAttributes>
  implements LocationsAttributes
{
  public id!: number;
  public name!: string;
  public description!: string;
}

// Inicialização do model
Locations.init(
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
    tableName: 'locations',
  },
);

Locations.belongsTo(Scenarios, {
  constraints: true,
  foreignKey: 'id_Scenario',
});

export default Locations;
