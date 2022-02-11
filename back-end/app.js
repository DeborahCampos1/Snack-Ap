const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/", );

app.get("/", (require, response)=>{
    response.send(`Get Snack'n at Snack-a-log!`);
});

app.get("*", (require,response)=>{
    res.status(404).json({error: "Page not found"})
});

module.exports = app;
