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
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    damage: {
      type: DataTypes.STRING,
      allowNull: false
    },
    properties: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "weapons",
    timestamps: true,
  }
);


module.exports = Weapons;
