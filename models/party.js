const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Party extends Model {}

// Sequelize will create this table if it doesn't exist on startup
Party.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    dm_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    player_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    character_ids: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    session_ids: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "party",
    timestamps: true,
    underscored: true, // Use snake_case for column names
  }
);

module.exports = Party;
