const express = require('express');
const confirmHealth = require('../confirmHealth.js');
const { correctSnack, checkName , isBoolean } = require('../validations');
const snacks = express.Router();

const {getAllSnacks, getOneSnack, createSnack , deleteSnack, updateSnack} = require("../queries/snacks.js");
  
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
        if(postSnack.id && !postSnack.image){
            let correctedSnack = correctSnack(postSnack);
            res.status(200).json(
                {
                    success: true, 
                    payload: {
                        id: postSnack.id,
                        name: correctedSnack,
                        image: "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image",
                        fiber: postSnack.fiber,
                        protein: postSnack.protein,
                        added_sugar: postSnack.added_sugar,
                        is_healthy: postSnack.is_healthy,
                    }
            });

        } if(postSnack.id && postSnack.image){
            let correctedSnack = correctSnack(postSnack)
            res.status(200).json(
                {
                    success: true, 
                    payload: {
                        id: postSnack.id,
                        name: correctedSnack,
                        image: postSnack.image,
                        fiber: postSnack.fiber,
                        protein: postSnack.protein,
                        added_sugar: postSnack.added_sugar,
                        is_healthy: postSnack.is_healthy,      
                    }
            });

        } else {
            res.status(404).json({success: false, payload: "Snack not found"})
        }

    }catch(err){
        console.log(err);
    }
});

snacks.delete("/:id", async (req,res)=>{
    const { id } = req.params;
    try{
        const deletedSnack = await deleteSnack(id);
        if(deletedSnack.id){
            res.status(200).json({success: true, payload: deletedSnack})
        }else{
            res.status(404).json({success: false, payload: "Snack not found"})
        }
    }catch(err){
        console.log(err)
    }
});

snacks.put("/:id", async (req,res)=>{
    const { id } = req.params;
    const { body } = req;
    const updatedSnack = await updateSnack(id, body);
    if(updatedSnack.id){
        res.status(200).json(updatedSnack)
    }else{
        res.status(404).json({success: false, payload: "Snack not found"})
    }
})

module.exports = snacks;
