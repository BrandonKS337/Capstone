const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Monster extends Model {}

// Sequelize will create this table if it doesn't exist on startup
Monster.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    race: {
      type: DataTypes.TEXT, // Use TEXT data type for potentially large content
      allowNull: false,
      unique: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    xp: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    background: {
      type: DataTypes.TEXT, // Use TEXT data type for potentially large content
      allowNull: true,
    },
    details: {
      type: DataTypes.TEXT, // Use TEXT data type for potentially large content
      allowNull: true,
    },
    weapon_ids: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    spell_ids: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    equipment_ids: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "monster",
    timestamps: true,
    underscored: true, // Use snake_case for column names
  }
);

module.exports = Monster;
