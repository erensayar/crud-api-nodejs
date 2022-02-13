const mongoose = require("mongoose");
require('dotenv').config()

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.URL;
db.note = require("./Note")(mongoose);

module.exports = db;
