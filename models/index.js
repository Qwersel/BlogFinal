const Author = require("./Author");
const Article = require("./Article");

Author.hasMany(Article, { foreignKey: "author_id", as: "articles" });
Article.belongsTo(Author, { foreignKey: "author_id", as: "author" });

module.exports = { Author, Article };
