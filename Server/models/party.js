const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
// const User = require("./user")
// const Hero = require("./hero")
// const Session = require("./session")

class Party extends Model {}


// Sequelize will create this table if it doesn't exist on startup
Party.init(
  {
    party_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    party_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dm_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    player_ids: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    hero_ids: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    session_ids: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "party",
    timestamps: true,
    underscored: true, // Use snake_case for column names
  }
);

// Party.belongsTo(Party, { foreignKey: 'dm_id' });

// Party.hasMany(User, { foreignKey: 'player_ids' });
// Party.hasMany(Hero, { foreignKey: 'hero_ids' });
// Party.hasMany(Session, { foreignKey: 'session_ids' });

//user and session are both causing server to bug out


module.exports = Party;
