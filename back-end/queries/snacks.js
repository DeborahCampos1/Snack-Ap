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

// const correctSnack = (snack)=>{
//     let name = snack.name.split(' ');

//     for ( let i = 0; i < name.length; i++ ){
//         name[i] = name[i].charAt(0).toUppercase() + name[i].slice(1).toLowerCase();
//     }
//     return name.join(' ');
// }

module.exports = {
    getAllSnacks,
    getOneSnack, 
    createSnack,
   
};
