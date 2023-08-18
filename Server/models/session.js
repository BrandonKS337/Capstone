const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
// const Encounter = require("./encounter");

class Session extends Model {}

// Sequelize will create this table if it doesn't exist on startup
Session.init(
  {
    session_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    session_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dm_id: {
      type: DataTypes.INTEGER,
      allowNull: false, //might need to change this later.... setting true for now because I can't be a user via postman that I know of
      // references: {
      //   model: "users",
      //   key: "id",
      // },
    },
    player_ids: {
      type: DataTypes. JSON,
      allowNull: true
    },
    post: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    media: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    encounter_ids: {
      type: DataTypes.JSON,
      allowNull: true,
      // references: {
      //   model: "encounters",
      //   key: "encounter_id",
      // },
      // foreignKey: "encounter_ids"
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "session",
    timestamps: true,
    underscored: true, // Use snake_case for column names
  }
);

// Session.hasOne(Encounter, { foreignKey: "encounter_ids" });
/*see below for notes on when using this error*/

module.exports = Session;


