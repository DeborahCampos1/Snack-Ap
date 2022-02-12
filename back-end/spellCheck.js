const correctSnack = (postSnack)=>{
    let snackName = postSnack.name.split(' ');

    for (let i = 0; i < snackName.length; i++ ){
    snackName[i] = snackName[i].length> 2 ? snackName[i][0].toUpperCase() + snackName[i].slice(1).toLowerCase() : snackName[i];
    }
    return snackName.join(' ');
}

module.exports = correctSnack;