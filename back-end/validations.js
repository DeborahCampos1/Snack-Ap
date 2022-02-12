const correctSnack = (postSnack)=>{
    let snackName = postSnack.name.split(' ');

    for (let i = 0; i < snackName.length; i++ ){
    snackName[i] = snackName[i].length> 2 ? snackName[i][0].toUpperCase() + snackName[i].slice(1).toLowerCase() : snackName[i];
    }
    return snackName.join(' ');
}
const checkName = (req, res, next) => {
    if (req.body.name) {
        console.log({snackName: req.body.name});
        next();
      } else {
        res.status(400).json({ error: "Name is required" });
      }
      
};

const isBoolean = (req, res, next)=> {
    if(typeof req.body.is_healthy === "boolean"){
        next();
    }else {
      res.status(400).json({ error: "is_healthy must be True or False" });
    }
  }


module.exports = 
{ 
    correctSnack,
    checkName,
    isBoolean
};