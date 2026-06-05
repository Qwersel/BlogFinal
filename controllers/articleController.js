const { Author, Article } = require("../models");

exports.createArticle = async (req, res) => {
  try {
    const { title, content, author_id } = req.body;
    if (!title || !content || !author_id) {
      return res
        .status(400)
        .json({ error: "title, content, and author_id are required fields" });
    }
    const author = await Author.findByPk(author_id);
    if (!author)
      return res.status(400).json({ error: "Author does not exist" });
    const article = await Article.create(req.body);
    res.status(201).json(article);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllArticles = async (req, res) => {
  try {
    const articles = await Article.findAll({
      include: [{ model: Author, as: "author", attributes: ["id", "name"] }],
    });
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getArticleById = async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id, {
      include: [{ model: Author, as: "author", attributes: ["id", "name"] }],
    });
    if (!article) return res.status(404).json({ error: "Article not found" });
    res.json(article);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateArticle = async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id);
    if (!article) return res.status(404).json({ error: "Article not found" });
    await article.update(req.body);
    res.json(article);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteArticle = async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id);
    if (!article) return res.status(404).json({ error: "Article not found" });
    await article.destroy();
    res.json({ message: "Article deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
