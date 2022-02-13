const express = require("express");
const app = express();
require('dotenv').config()
const { PORT } = process.env;
require("./app/config/Database").connect();

/*
// Cors Config
// <============================================================>
const cors = require("cors");
var corsOptions = {
  origin: "http://localhost:8081"
};
*/

// Set Defaults
// <============================================================>

// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// Simple Route
// <============================================================>
app.get("/", (req, res) => {
  res.json({ message: "Please add /api/v1/notes prefix to url. (/127.0.0.1:8080/api/v1/notes)" });
});

require("./app/routes/NoteRoutes")(app);