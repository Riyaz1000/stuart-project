// const express = require("express");
import express, { urlencoded } from "express";
const app = express();
import instagramRoutes from "./Routes/instagram.routes.js";
import connectDB from "./lib/db.js";

const port = 6381;

app.get("/", (req, res) => {
  res.send("hello node.js");
});

// connect database
connectDB();

// data understanding middleware for (postman to nodejs)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CRUD OPERATIONS FOR INSTA POST

app.use("/instagram", instagramRoutes);

app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});
