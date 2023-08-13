const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Hero extends Model {}

// Sequelize will create this table if it doesn't exist on startup
Hero.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    race: {
      type: DataTypes.TEXT, // Use TEXT data type for potentially large content
      allowNull: false,
      unique: false,
    },
    class: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    xp_earned: {
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

module.exports = Hero;
