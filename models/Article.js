const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Article = sequelize.define(
  "Article",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    published_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "authors",
        key: "id",
      },
    },
  },
  {
    tableName: "articles",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = Article;
