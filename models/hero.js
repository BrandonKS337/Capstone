const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
const Race = require("./race")
const Class = require("./class")
const Weapons = require("./weapon")
const Equipment = require("./equipment")
const Spell = require("./spell")

class Hero extends Model {}


// Sequelize will create this table if it doesn't exist on startup
Hero.init(
  {
    heroes_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    hero_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    hero_level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    xp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    race_id: {
      type: DataTypes.INTEGER, // Use TEXT data type for potentially large content
      allowNull: false,
      unique: false,
    },
    class_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false,
    },
    background: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    weapon_ids: {
      type: DataTypes.INTEGER, // Use TEXT data type for potentially large content
      allowNull: true,
    },
    spell_ids: {
      type: DataTypes.INTEGER, // Use TEXT data type for potentially large content
      allowNull: true,
    },
    equipment_ids: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    currency_pp: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    currency_gp: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    currency_sp: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    currency_cp: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    // created_at: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    //   defaultValue: DataTypes.NOW,
    // },
    // updated_at: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    //   defaultValue: DataTypes.NOW,
    // },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "heroes",
    timestamps: true,
    underscored: true, // Use snake_case for column names
  }
);

// Hero.sync({ force: true }).then(async () => {
//   // Populate example heroes
//   await Hero.bulkCreate([
//     {
//       first_name: "Johnny",
//       last_name: "Beansprout",
//       race: "Human",
//       class: "NPC",
//     },
//     {
//       first_name: "Eldric",
//       last_name: "Fireblade",
//       race: "Elf",
//       class: "Warrior",
//     },
//     {
//       first_name: "Sylvia",
//       last_name: "Moonshadow",
//       race: "Half-Elf",
//       class: "Mage",
//     },
//   ]);
//   //if this force pushes then it console log displays below msg to user in terminal
//   console.log("Hero table created and example data inserted");
// });

Hero.hasOne(Race, { foreignKey: 'race_id' });
Hero.hasOne(Class, { foreignKey: 'class_id' });
Hero.hasMany(Weapons, {foreignKey: 'weapons_id'})
Hero.hasMany(Equipment, { foreignKey: 'equipment_ids' });
Hero.hasMany(Spell, { foreignKey: 'spells_ids' });

module.exports = Hero;


/*
To add a user_id to a hero:

UPDATE heroes
SET user_id = 1 -- Replace with the appropriate user's id
WHERE heroes_id = 1; -- Replace with the hero's id


*/
