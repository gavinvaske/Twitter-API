import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize"
import {
  HasManyGetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyHasAssociationMixin,
  Association,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
} from "sequelize"
const sequelize = require("../config/database")

class Tweet extends Model {
  public id!: number
  public content!: string

  // timestamps!
  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Tweet.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: new DataTypes.STRING(140),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "tweets",
  }
)
