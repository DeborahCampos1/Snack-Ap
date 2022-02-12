const confirmHealth = (snack) => {

    if(typeof snack.protein !== "number" || typeof snack.fiber !== "number" || typeof snack.added_sugar !== "number"){
        return null
      } if(snack.added_sugar < 5 && (snack.protein >=5 || snack.fiber >=5)){
        return true
      } else if (snack.added_sugar < 5 && snack.fiber > 5){
        return true
      } else if (snack.added_sugar < 5 && snack.protein > 5){
        return true
      } else if (snack.added_sugar > 5 && snack.fiber > 5){
        return false
      } else if (snack.added_sugar > 5 && snack.protein > 5){
        return false
      }else if(snack.added_sugar > 5 && snack.protein >=5 && snack.fiber >=5){
        return false
      } else if(snack.added_sugar > 5 && snack.protein < 5 && snack.fiber < 5){
        return false
      } else if(snack.added_sugar < 5 && snack.protein < 5 && snack.fiber < 5){
        return false
      }    
};


module.exports = confirmHealth;
