const bcrypt = require("bcrypt");
const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
// const Session = require("./session");
// const Encounter = require("./encounter");
// const Party = require("./party");
// const Hero = require("./hero")

const sequelizeInstance = dbConnect.Sequelize;


class User extends Model { }

//checks for existing table and if it doesn't this model creates
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      primaryKey: true,
      unique: true

    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      unique: true,
      primaryKey: true,

    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    character_ids: {
      type: DataTypes.JSON,
      allowNull: true,
      required: true,
    },
    encounter_ids: {
      type: DataTypes.JSON,
      allowNull: true,
      required: true,
    },

    character_ids: {
      type: DataTypes.INTEGER,
      allowNull: true,
      // required: true,
    },
    encounter_ids: {
      type: DataTypes.INTEGER,
      allowNull: true,
      // required: true,
    },
    profileImage: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    aboutMe: {
      type: DataTypes.TEXT,
      allowNull: true
    }
    
  },
  {
    sequelize: sequelizeInstance, //these several lines create "options"
    modelName: "users",
    timestamps: true,
    freezeTableName: true, //freezes table name so it cant be changed and break stuff
    defaultScope: {
      attributes: {
        exclude: ["password"], //this line means that the user password key doesn't get shown any time we call the model
      },
    },
    scopes: { //this is a special scope that allows us to return password so we can verify it with becrypt
      withPassword: {
        attributes: {}, //leave attributes as an empty object
      },
    },
  }
);



// User.hasMany(Session,{foreignKey:"id", as:"Character", onDelete:"CASCADE", onUpdate:"CASCADE"})
//cascade is for update/delete
// User.hasMany(Hero, { heroes_id: 'heroes_ids' });
// User.hasMany(Encounter, { foreignKey: 'encounter_ids' });

// User.hasMany(Encounter, { foreignKey: 'dm_id' });   //this bugs out the save.....find out why. prob something with dm_id inside encounter table not existing....aimed at wrong table??? may need to re-aim it at party
// another thought here is the user can gain dm status so shouldnt the party table assign a specific user as the dm??

// User.hasMany(Party, { foreignKey: 'dm_id' });
// User.hasMany(Party, { foreignKey: 'player_ids' });

// User.hasMany(Hero, { foreignKey: 'user_id' });


module.exports = User;
