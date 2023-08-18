const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Post extends Model {}

// Sequelize will create this table if it doesn't exist on startup
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true, //might need to change this later.... setting true for now because I can't be a user via postman that I know of
      // references: {
      //   model: "users",
      //   key: "id"
      // }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT, // Use TEXT data type for potentially large content
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "posts", // Use singular form for model name
    timestamps: true,
    underscored: true, // Use snake_case for column names
  }
);

module.exports = Post;
