const fs = require('fs');
const colors = require('colors');

let listarTabla = ( base, limite=10) =>{
    console.log("=====================".green);
    console.log(`tabla del ${base}`.rainbow);
    console.log("=====================".green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i} = ${base * i}\n`.yellow);
    }
    
}



let crearArchivo = (base, limite)=>{
    return new Promise((resolve, reject)=>{
        if(!Number(base)){
            reject("la base no es numero");
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base * i}\n`;
        }
        fs.writeFile(`tablas/tabla_del_${base}-al-${limite}.txt`, data, err => {
            if (err)
                reject(err);
            else 
                resolve(`tabla-${base}-lim-${limite}.txt`.yellow);
        })
    })
}
module.exports = {
    crearArchivo,
    listarTabla
}
