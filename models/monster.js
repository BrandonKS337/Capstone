const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
const Race = require("./race")
const Class = require("./class")
const Weapon = require("./weapon")
const Equipment = require("./equipment")
const Spell = require("./spell")

class Monster extends Model {}


// Sequelize will create this table if it doesn't exist on startup
Monster.init(
  {
    monster_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    monster_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty_level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    xp_value: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    race_id: {
      type: DataTypes.INTEGER, 
      allowNull: true,
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    background: {
      type: DataTypes.TEXT, // Use TEXT data type for potentially large content
      allowNull: true,
    },
    details: {
      type: DataTypes.TEXT, // Use TEXT data type for potentially large content
      allowNull: true,
    },
    weapon_ids: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    spell_ids: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    equipment_ids: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "monster",
    timestamps: true,
    underscored: true, // Use snake_case for column names
  }
);

Monster.hasOne(Race, { foreignKey: 'race_id' });
Monster.hasOne(Class, { foreignKey: 'type_id' });
Monster.hasMany(Weapon, { foreignKey: 'weapon_ids' });
Monster.hasMany(Equipment, { foreignKey: 'equipment_ids' });
Monster.hasMany(Spell, { foreignKey: 'spells_ids' });

module.exports = Monster;
