const express = require("express");
const app = express();
const snacksController = require("./controllers/snackController.js")

const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.send(`Get Snack'n at Snack-a-log!`);
});

app.use("/snacks", snacksController)

app.get("*", (req,res)=>{
    res.status(404).json({error: "Page not found"})
});

module.exports = app;
