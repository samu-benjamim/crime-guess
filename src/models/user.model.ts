import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

// Tipagem dos atributos
interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password_hash: string;
  avatar_url?: string | null;
}

// Tipagem para criação (id e created_at são opcionais)
export type UserCreationAttributes = Optional<UserAttributes, 'id'>;

// Classe do model
export class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number;
  public username!: string;
  public email!: string;
  public password_hash!: string;
  public avatar_url!: string | null;
  public created_at!: Date;
}

// Inicialização do model
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    password_hash: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    avatar_url: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'users',
  },
);

export default User;
