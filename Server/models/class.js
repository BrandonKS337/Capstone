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
    class_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    armor_class: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    atk_dmg: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    health: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
    
  },
  {
    sequelize: sequelizeInstance,
    modelName: "class",
    timestamps: true,
  }
);


module.exports = Class;
