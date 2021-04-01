const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "music",
  password: 'postgres',
  port: 5432,
});

const getSongs = (request, response) => {
  pool.query("SELECT * FROM songs", (error, results) => {
    if (error) {
      throw error;
    }
    console.log(response);
    response.status(200).json(results.rows);
  });
};
const getArtistName = (request, response) => {
  pool.query('SELECT * FROM artists', (error, results) => {
    if (error) {
      throw error;
    }
    console.log(response);
    response.status(200).json(results.rows);
  });
};
const addArtist = (request, response) => {
  const { artist_name, age, genre } = request.body;
  pool.query(
    `INSERT INTO artist (artist_name, age, genre) VALUES ($1, $2, $3)`,
    [artist_name, age, genre],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const addSongs = (request, response) => {
  const { song_name, downloads } = request.body;
  pool.query(
    `INSERT INTO songs (song_name, downloads) VALUES ($1, $2)`,
    [song_name, downloads],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

module.exports = {
  getSongs,
  addSongs,
  getArtistName,
  addArtist,
};