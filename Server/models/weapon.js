const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Weapons extends Model {}

// Sequelize will create this table if it doesn't exist on startup
Weapons.init(
  {
    weapons_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "weapons",
    timestamps: true,
  }
);


module.exports = Weapons;
