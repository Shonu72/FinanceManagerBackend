require("dotenv").config();
const express = require("express");
const http = require("http");
const app = express();
// const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.port || 3000, () => {
  console.log(`Server running at http://localhost:${process.env.port}`);
});

/*
Reason to use mongoose is their capability to 
create a schema for the data that we are going to store in the database.

*/
