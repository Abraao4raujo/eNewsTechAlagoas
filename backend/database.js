const mongoose = require("mongoose");
const db = mongoose.connection;
const col = db.collection("news");

function connectToDB() {
  mongoose.connect(process.env.URI_MONGODB);
  db.on("error", (error) => console.error(error));
  db.once("open", () => console.log("✔ Connected to the database"));
}

function sendNewsToDB(firstName, lastName, title, desc, image_url) {
  const dataNews = {
    auth_name: { first: firstName, last: lastName },
    title: title,
    desc: desc,
    image_url: image_url,
    data: new Date(),
  };

  col.insertOne(dataNews);
  console.log("noticia enviada!");
  return dataNews;
}

async function getNewsToDB() {
  const filter = { title: "teste" };
  const document = await col.findOne(filter);
  console.log("Document found:\n" + JSON.stringify(document));
}

module.exports = { connectToDB, sendNewsToDB };
