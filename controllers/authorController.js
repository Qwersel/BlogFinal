const { Author, Article } = require("../models");

exports.createAuthor = async (req, res) => {
  try {
    const { name, email, bio } = req.body;
    if (!name || !email) {
      return res
        .status(400)
        .json({ error: "name and email are required fields" });
    }
    const author = await Author.create({ name, email, bio });
    res.status(201).json(author);
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({ error: "Email already exists" });
    }
    res.status(500).json({ error: err.message });
  }
};

exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.findAll();
    res.json(authors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAuthorById = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id, {
      include: [{ model: Article, as: "articles" }],
    });
    if (!author) return res.status(404).json({ error: "Author not found" });
    res.json(author);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateAuthor = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id);
    if (!author) return res.status(404).json({ error: "Author not found" });
    await author.update(req.body);
    res.json(author);
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({ error: "Email already exists" });
    }
    res.status(500).json({ error: err.message });
  }
};

exports.deleteAuthor = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id);
    if (!author) return res.status(404).json({ error: "Author not found" });
    await author.destroy();
    res.json({ message: "Author deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
