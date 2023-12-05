const express = require('express');
const app = express();
const morgan = require("morgan") //import morgan
const {log} = require("mercedlogger") // import mercedlogger's log function
const cors = require("cors") // import cors


//DESTRUCTURE ENV VARIABLES WITH DEFAULT VALUES
const {PORT = 3333} = process.env

// GLOBAL MIDDLEWARE
app.use(cors()) // add cors headers
app.use(morgan("tiny")) // log the request for debugging
app.use(express.json()) // parse json bodies


//used to access css pages
app.use(express.static('views'));


// ROUTES AND ROUTES
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// APP LISTENER
app.listen(PORT, () => log.green("SERVER STATUS", `Listening on port ${PORT}`))
