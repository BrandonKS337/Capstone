const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;


// const User = require("./user")
// const Party = require("./party")
// const Hero = require("./hero")
// const Monster = require("./monster")

class Encounter extends Model {}


// Sequelize will create this table if it doesn't exist on startup
Encounter.init(
  {
    encounter_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    encounter_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    encounter_description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dm_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      // autoIncrement:true
    },
    party_members: {
      type: DataTypes.INTEGER, // Use TEXT data type for potentially large content
      allowNull: true,
      // autoIncrement:true
    },
    heroes_ids: {
      type: DataTypes.INTEGER,
      allowNull: true,
      // autoIncrement:true
    },
    monster_ids: {
      type: DataTypes.STRING,
      allowNull: true,
      // autoIncrement:true
    },
    winner: {
      type: DataTypes.INTEGER,
      allowNull: true,
      // autoIncrement:true
    },
    loser: {
      type: DataTypes.INTEGER,
      allowNull: true,
      // autoIncrement:true
    },
    xp_earned: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "encounter",
    timestamps: true,
    underscored: true, // Use snake_case for column names
  }
);

// Encounter.hasOne(User, { foreignKey: 'dm_id' });
// Encounter.hasMany(Party, { foreignKey: 'party_members' });
// Encounter.hasMany(Hero, { foreignKey: 'heroes_ids' });
// Encounter.hasMany(Monster, { foreignKey: 'monster_ids' });

module.exports = Encounter;
