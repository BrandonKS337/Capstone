const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
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
    post: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    media: {
        type: DataTypes.BLOB,
        allowNull: true,
      },
    encounter_ids: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "session",
    timestamps: true,
    underscored: true, // Use snake_case for column names
  }
);

module.exports = Session;
