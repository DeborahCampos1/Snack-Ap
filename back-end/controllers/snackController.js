const express = require('express');
const snacks = express.Router();

const {getAllSnacks, getOneSnack } =require("../queries/snacks.js");

snacks.get("/", async (req,res)=>{

    try{
        const allSnacks = await getAllSnacks();

        if(allSnacks.length){
            res.status(200).json(allSnacks);
        } else {
            res.status(404).json({error: "No snacks were returned from db"});
        }
    }catch(err){
        console.log(err)
    }
});
snacks.get("/:id", async (req,res)=>{
    const { id } = req.params;
    try{
        const snack = await getOneSnack(id);

        if(snack.id){
            res.status(200).json({success: true, payload: snack});
            console.log(snack)
        } else {
            res.status(404).json({success: false, payload: "not found"});
        }
    }catch(err){
        console.log(err)
    }
});

module.exports = snacks;
