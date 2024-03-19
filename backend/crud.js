const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = 3000;

async function main() {
  await mongoose.connect(
    `mongodb+srv://abraao:${process.env.TOKEN_MONGODB}@enews.32kfydx.mongodb.net/`
  );
}

const newsSchema = new mongoose.Schema({
  auth: String,
  data: String,
  desc: String,
  title: String,
  id: Number,
  image_url: String,
});

app.get("/news", (req, res) => {
  res.send("Hello world!");
    const News = mongoose.model("News", newsSchema);
  new News({
    auth: "Fulano",
    data: "12/12/12",
    desc: "fulano postou fulano",
    title: "fulano falou de fulano",
    id: 2,
    image_url: "https://via.placeholder.com/259x146",
  });
});

app.post("/sendNews", (req, res) => {

});

app.listen(port, () => {
  console.log(`Servidor rodando, http://localhost:${port}`);
  main()
    .then(() => {
      console.log("Conectado ao banco de dados");
    })
    .catch((err) => console.log(err));
});
