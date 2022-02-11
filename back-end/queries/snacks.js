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
        const snack = await db.one("SELECT * FROM snackss WHERE id=$1", id);
        return snack;
    }catch(err){
        return err;
    }
}


module.exports = {
    getAllSnacks,
    getOneSnack
};
