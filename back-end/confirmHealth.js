const confirmHealth = (snack) => {

    if(isNaN(snack.protein) || isNaN(snack.fiber) || isNaN(snack.added_sugar)){
        return null
      } 
      if(snack.added_sugar < 5 && (snack.protein >=5 || snack.fiber >=5)){
        return true
      } 
        return false
    
};


module.exports = confirmHealth;
