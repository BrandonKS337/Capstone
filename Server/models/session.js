const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
// const Encounter = require("./encounter");

class Session extends Model {}

// Sequelize will create this table if it doesn't exist on startup
Session.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    session_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true, //might need to change this later.... setting true for now because I can't be a user via postman that I know of
      references: {
        model: "users",
        key: "id",
      },
    },
    post: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    media: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    encounter_ids: {
      type: DataTypes.JSON,
      allowNull: true,
      references: {
        model: "users",
        key: "id",
      },
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

/*C:\Users\b1aks\OneDrive\Desktop\IoD\Capstone\node_modules\sequelize\lib\associations\mixin.js:63
      throw new Error(`${source.name}.${_.lowerFirst(Type.name)} called with something that's not a subclass of Sequelize.Model`);
      ^

Error: session.hasOne called with something that's not a subclass of Sequelize.Model
    at session.<anonymous> (C:\Users\b1aks\OneDrive\Desktop\IoD\Capstone\node_modules\sequelize\lib\associations\mixin.js:63:13)
    at Object.<anonymous> (C:\Users\b1aks\OneDrive\Desktop\IoD\Capstone\models\session.js:38:9)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Module.require (node:internal/modules/cjs/loader:1141:19)
    at require (node:internal/modules/cjs/helpers:110:18)
    at Object.<anonymous> (C:\Users\b1aks\OneDrive\Desktop\IoD\Capstone\models\party.js:6:17)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)

Node.js v18.16.0
[nodemon] app crashed - waiting for file changes before starting... */
