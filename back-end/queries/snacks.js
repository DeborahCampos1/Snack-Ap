const db = require("../db/dbConfig.js");

const getAllSnacks = async () =>{
    try{
        const allSnacks = await db.any("SELECT * FROM snacks");
        return allSnacks;
    }catch(err){
        return err;
    }
}
const getOneSnack = async (id) =>{

    try{
        const snack = await db.one("SELECT * FROM snacks WHERE id=$1", id);
        return snack;
    }catch(err){
        return err;
    }
}
const createSnack = async (snack) =>{

    try{
        const newSnack = await db.one(
            "INSERT INTO snacks(name, image, fiber, protein, added_sugar, is_healthy) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *",
            [snack.name, snack.image,snack.fiber,snack.protein,snack.added_sugar, snack.is_healthy]
        )
        return newSnack
    }catch(err){
        return err;
    }
}

const deleteSnack = async (id)=>{
    try{
        const deletedSnack = await db.one(
            "DELETE FROM snacks WHERE id = $1 RETURNING *",
            id
        )
        return deletedSnack
    }catch(err){
        return err;
    }
}
module.exports = {
    getAllSnacks,
    getOneSnack, 
    createSnack,
   deleteSnack
};
