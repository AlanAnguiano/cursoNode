const opt = {
    base: {
        demand: true,
        alias: "b"
    },
    limite:{
        alias: "l",
        default: 10
    }
}
const argv = require('yargs')
    .command("listar","imprime en consola una tabla de multiplicar",opt)
    .command("crear"," crea un nuevo archvo con las tablas",opt)
    .help()
    .argv;
module.exports ={
    argv
}