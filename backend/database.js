const mongoose = require("mongoose");
const { collection } = require("./models/Item");
const db = mongoose.connection;
const col = db.collection("news");

function connectToDB() {
  mongoose.connect(process.env.URI_MONGODB);
  db.on("error", (error) => console.error(error));
  db.once("open", () => {
    console.log("✔ Connected to the database");
    getNewsByCategoryToDB();
  });
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

async function getNewsByCategoryToDB(category) {
  try {
    const filter = { category: `${category}` };
    const cursor = col.find(filter);
    const doc = await cursor.toArray();
    return JSON.stringify(doc);
  } catch (error) {
    console.error("Error ao encontrar documento:", error);
  }
}

module.exports = { connectToDB, sendNewsToDB, getNewsByCategoryToDB };
