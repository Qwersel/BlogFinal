require("dotenv").config();
const express = require("express");
const sequelize = require("./config/db");
const authorRoutes = require("./routes/authorRoutes");
const articleRoutes = require("./routes/articleRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/authors", authorRoutes);
app.use("/api/articles", articleRoutes);

app.get("/", (req, res) => {
  res.json({ message: "CMS Blogging API is running" });
});

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  });
