const confirmHealth = (snackp ,snackS,snackf ) => {

    if(typeof snackp !== "number" || typeof snackf !== "number" || typeof snackp !== "number"){
        return null
      } else if(snackS < 5 && (snackp >=5 || snackf >=5)){
        return true
      } else {
        return false
      }
  };

  export default confirmHealth;