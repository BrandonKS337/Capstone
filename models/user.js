const bcrypt = require("bcrypt");
const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const Session = require("./session");
const sequelizeInstance = dbConnect.Sequelize;

class User extends Model {}

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
    emailId: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      unique: true,
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
  },
  {
    sequelize: sequelizeInstance,
    modelName: "users",
    timestamps: true,
    freezeTableName: true,
    defaultScope: {
      attributes: {
        exclude: ["password"],
      },
    },
    scopes: {
      withPassword: {
        attributes: {},
      },
    },
  }
);



User.hasMany(Session,{foreignKey:"id", as:"Character", onDelete:"CASCADE", onUpdate:"CASCADE"})
//cascade is for update/delete

module.exports = User;
