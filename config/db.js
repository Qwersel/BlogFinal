const { Sequelize } = require("sequelize");
require("dotenv").config();

// Use SQLite for demo purposes (no database setup needed)
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
  logging: false,
});

module.exports = sequelize;
