const express = require("express");
const cors = require("cors");
const { connectToDB, getNewsByCategoryToDB } = require("./database");
const News = require("./models/Item");
require("dotenv").config();
connectToDB();

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/getNews", async (req, res) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.get("/News/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const news = await News.findById(id);
    res.json(news);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.get(`/:category`, async (req, res) => {
  try {
    const categ = req.params.category;
    const news = await getNewsByCategoryToDB(categ);
    res.json(news);
  } catch (error) {
    res.status(500).send("Server Error");
    return error;
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando, http://localhost:${PORT}`);
});
