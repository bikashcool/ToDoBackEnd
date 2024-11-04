const express = require('express');
const app = express();

// load config from env file
require("dotenv").config();
const PORT  = process.env.PORT || 4000;

// middleware to parse json request body
app.use(express.json());

// import routes for todo api
const todoRoutes = require("./routes/todo");

// mount the todo api routes
app.use("/api/v1", todoRoutes);

// start server
app.listen(PORT, ()=> {
    console.log(`Server started successfully at ${PORT}`);
})


// connect to the database
const dbConnect = require("./config/database");
dbConnect();

// default Route
app.get("/", (req, res) => {
    res.send(`<h3> This is HOMEPAGE </h3>`);
})
