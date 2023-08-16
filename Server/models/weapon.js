const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Weapons extends Model {}

// Sequelize will create this table if it doesn't exist on startup
Weapons.init(
  {
    weapon_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    weapon_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize: sequelizeInstance,
    modelName: "weapons",
    timestamps: true,
  }
);


module.exports = Weapons;
