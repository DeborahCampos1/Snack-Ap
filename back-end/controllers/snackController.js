const express = require('express');
const snacks = express.Router();

const {getAllSnacks, getOneSnack, createSnack} = require("../queries/snacks.js");

// const correctSnack = (snack)=>{
//     let name = snack.name.split(' ');

//     for ( let i = 0; i < name.length; i++ ){
//         name = name.substring(1).toUppercase() + name[i].slice(1).toLowerCase();
//     }
//     return name.join(' ');
// }


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
        let correctSnacks = postSnack.name.charAt(0).toUpperCase() + postSnack.name.slice(1).toLowerCase();
        
        if(postSnack.id && postSnack.image){
            
            res.status(200).json({success: true, payload: {
                id: postSnack.id,
                name: correctSnacks,
                image: postSnack.image,
                fiber: postSnack.fiber,
                protein: postSnack.protein,
                added_sugar: postSnack.added_sugar,
                ishealthy: postSnack.is_healthy,      
            }})

        } if(postSnack.id && !postSnack.image){
            let correctSnacks = postSnack.name.charAt(0).toUpperCase() + postSnack.name.slice(1).toLowerCase();
            res.status(200).json({success: true, payload: {
                id: postSnack.id,
                name: correctSnacks,
                image: "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image",
                fiber: postSnack.fiber,
                protein: postSnack.protein,
                added_sugar: postSnack.added_sugar,
                ishealthy: postSnack.is_healthy,      
            }})


        } else {
            res.status(404).json({success: false, payload: "Snack not found"})
        }
    }catch(err){
        console.log(err);
    }
})

module.exports = snacks;
