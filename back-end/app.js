const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("<h1>Welcome to Snack App!</h1>")
});

app.get("*", (req,res)=>{
    res.status(404).json({error: "Page not found"})
});

module.exports = app;
