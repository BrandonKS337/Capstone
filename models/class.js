const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;


class Class extends Model {}

// Sequelize will create this table if it doesn't exist on startup
Class.init(
  {
    class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "class",
    timestamps: true,
  }
);


module.exports = Class;
