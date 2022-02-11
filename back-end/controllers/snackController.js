const express = require('express');
const snacks = express.Router();

const {getAllSnacks, getOneSnack, createSnack } =require("../queries/snacks.js");

snacks.get("/", async (req,res)=>{

    try{
        const allSnacks = await getAllSnacks();

        if(allSnacks.length){
            res.status(200).json({success: true, payload: allSnacks});
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
            res.status(404).json({success: false, payload: "Snack not found"});
        }
    }catch(err){
        console.log(err)
    }
});

snacks.post("/", async (req,res)=>{
    const { body } = req;
    try{
        const postSnack = await createSnack(body);
        if(postSnack.id){
            res.status(200).json({success: true, payload: postSnack})
        } else {
            res.status(404).json({success: false, payload: "Snack not found"})
        }
    }catch(err){
        console.log(err);
    }
})

module.exports = snacks;
