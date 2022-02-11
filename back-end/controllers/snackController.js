const express = require('express');
const snacks = express.Router();

const {getAllSnacks, getOneSnack } =require("../queries/snacks.js");

snacks.get("/", async (req,res)=>{

    try{
        const allSnacks = await getAllSnacks();

        if(allSnacks.length){
            res.status(200).json(allSnacks);
        } else {
            res.status(500).json({error: "No snacks were returned from db"});
        }
    }catch(err){
        console.log(err)
    }
});
snacks.get("/:id", async (req,res)=>{
    const { id } = req.params;
    try{
        const snack = await getOneSnack(id);
        console.log(snack)

        if(snack.id){
            res.status(200).json({sucess: "true", payload: snack});
        } else {
            res.status(500).json({error: "No snacks were returned from db"});
        }
    }catch(err){
        console.log(err)
    }
});

module.exports = snacks;
