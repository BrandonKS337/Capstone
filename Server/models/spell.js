const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Spell extends Model {}

// Sequelize will create this table if it doesn't exist on startup
Spell.init(
  {
    spell_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    spell_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize: sequelizeInstance,
    modelName: "spell",
    timestamps: true,
  }
);


module.exports = Spell;
