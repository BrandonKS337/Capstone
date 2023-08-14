const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Race extends Model {}

// Sequelize will create this table if it doesn't exist on startup
Race.init(
  {
    race_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "race",
    timestamps: true,
  }
);


module.exports = Race;
