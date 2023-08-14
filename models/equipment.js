const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Equipment extends Model {}

// Sequelize will create this table if it doesn't exist on startup
Equipment.init(
  {
    equipment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "equipment",
    timestamps: true,
  }
);


module.exports = Equipment;
