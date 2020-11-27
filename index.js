const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const db = require("./src/Config/db");
const cors = require("cors");
require("dotenv").config();

// Routes
// const authRoute = require("./src/Users/Routes/authRoutes");
const authRoute = require("./src/Users/Routes/authRoutes");

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Router
// app.use("/api/v1/auth", authRoute);
app.use("/api/v1/auth",authRoute);

// Index
app.get("/api/v1", (req, res) => {
  res.send("Hello Ankasa Ticketing !");
});

// Middleware Photos
app.use(express.static("Images"));

// Listen Port
server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
