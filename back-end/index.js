
const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const cors = require("cors");
const db = require("./queries.js");
const port = 3030;

app.use(cors());

app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express and Postgres API" });
});

app.get("/songs", db.getSongs);
app.post("/songs", db.addSongs);
app.get('/fk_artist', db.getArtistName);
app.post('/fk_artist', db.addArtist);

app.listen(port, () => {
  console.log(`App is running on port ${port}.`);
});