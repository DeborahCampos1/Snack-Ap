const express = require('express');
const snacks = express.Router();
const {getAllSnacks, getOneSnack, createSnack , deleteSnack, updateSnack} = require("../queries/snacks.js");
const confirmHealth = require('../confirmHealth.js');
const { correctName, checkName } = require('../validations');

  
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

snacks.post("/", checkName, async (req,res)=>{
    let { body } = req;
    
    try{
        body = { ...body, is_healthy: confirmHealth(body) }
        body = { ...body, name: correctName(body.name)}
        if(!body.image){
            body = { ...body, image: "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image"};
        }
        const postSnack = await createSnack(body);
        if(postSnack.id){
            res.status(200).json({success: true, payload: postSnack});
        }  else {
            res.status(404).json({success: false, payload: "Snack not found"});
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
    let { body } = req;
    try{
        body = { ...body, is_healthy: confirmHealth(body) }
        body = { ...body, name: correctName(body.name)}

        const updatedSnack = await updateSnack(id, body);
        if(updatedSnack.id){
            res.status(200).json({success: true , payload: updatedSnack})
        }else{
            res.status(404).json({success: false, payload: "Snack not found"})
        }
    }catch(err){
        console.log(err)
    }
})

module.exports = snacks;
