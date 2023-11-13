// console.log(erro);
//             ^
// ReferenceError: erro is not defined
//     at Object.<anonymous> (/home/runner/Nodejs-1/index.js:1:13)
//     at Module._compile (node:internal/modules/cjs/loader:1159:14)
//
//
// [Done] exited with code=1 in 0.108 seconds

//para fazer testes nas funções ultilizamos o bloco try

try { // tente executar isso daqui
    console.log(erro); //caso aconteça algum erro aqui
} catch(oErroaqui) { //se der erro, faça isso
    console.log('O erro aqui'); //mostre o erro
    //não mostrar o erro para o nosso usuario local 
    console.log(oErroaqui);
} 

    

