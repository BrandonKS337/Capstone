const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Encounter extends Model {}

// Sequelize will create this table if it doesn't exist on startup
Encounter.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    encounter_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    encounter_description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dm_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      autoIncrement:false
    },
    party_members: {
      type: DataTypes.INTEGER, // Use TEXT data type for potentially large content
      allowNull: true,
      autoIncrement:false
    },
    characters_ids: {
      type: DataTypes.INTEGER,
      allowNull: true,
      autoIncrement:false
    },
    monsters_ids: {
      type: DataTypes.STRING,
      allowNull: true,
      autoIncrement:false
    },
    winner: {
      type: DataTypes.INTEGER,
      allowNull: true,
      autoIncrement:false
    },
    loser: {
      type: DataTypes.INTEGER,
      allowNull: true,
      autoIncrement:false
    },
    xp_earner: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "encounter",
    timestamps: true,
    underscored: true, // Use snake_case for column names
  }
);

module.exports = Encounter;