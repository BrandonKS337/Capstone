const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
// const Race = require("./race")
// const Class = require("./class")
// const Weapons = require("./weapon")
// const Equipment = require("./equipment")
// const Spell = require("./spell")

class Hero extends Model {}

// Sequelize will create this table if it doesn't exist on startup
Hero.init(
  {
    hero_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },

    hero_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    hero_level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    xp: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    // race_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   unique: false,
    // },
    race_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    class_id: {
      type: DataTypes.STRING, //setting to string for manual entry/ Should be set up through associations but WHATERVER...stupid sql
      allowNull: true,
      unique: false,
    },
    background: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    // image: {      //this is to take in actual img
    //   type: DataTypes.BLOB("long"),
    //   allowNull: true,
    //   comment: "Character image",
    // },
    image_url: {   //this is to take in url for image
      type: DataTypes.STRING,
      allowNull: true,
      comment: "URL for character image",
    },
    hero_image: {
      type: DataTypes.TEXT('long'),
      allowNull: true,
      comment: "This is for user uploads"
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
    AC: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Movement: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Proficiency: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Initiative: {
      type: DataTypes.INTEGER
    },
    STR: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DEX: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CON: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    INT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    WIS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CHA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    save_STR: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    save_DEX: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    save_CON: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    save_INT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    save_WIS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    save_CHA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    passive_Perception: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    passive_Investigation: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    passive_Insight: {
      type: DataTypes.INTEGER,
      allowNull: true
    }

  },
  {
    sequelize: sequelizeInstance,
    modelName: "heroes",
    timestamps: true,
    underscored: true, // Use snake_case for column names
  }
);

module.exports = Hero;

//if I end up storing image elsewhere can use this instead of image
// imageUrl: {
//   type: DataTypes.STRING,
//   allowNull: true,
//   comment: "URL for character image",
// }
