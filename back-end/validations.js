const correctName = (snack)=>{
    let snackName = snack.split(' ');

    for (let i = 0; i < snackName.length; i++ ){
    snackName[i] = snackName[i].length> 2 ? snackName[i][0].toUpperCase() + snackName[i].slice(1).toLowerCase() : snackName[i];
    }
    return snackName.join(' ');
}


const checkName = (req, res, next) => {
    if (req.body.name) {
        next();
      } else {
        res.status(400).json({ error: "Name is required" });
      }
};

module.exports = 
{ 
    correctName,
    checkName
};