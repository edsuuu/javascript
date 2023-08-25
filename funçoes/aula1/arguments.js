//argumentos que sustenta todos os argumentos enviados 
// function funcao(a, b = 2, c = 4) {
//     // b = b || 2; 
//     //b é igual b ? b existe, b tem valor ? se tiver vai ser b se n tiver vai ser 0 
//     console.log(a + b + c);
// }

// funcao(2, '', 10);
 

function funcao({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
let obj = {nome: 'Edson', sobrenome: 'Lima', idade: 20};//[] é para array, chaves {} para objetos 
funcao(obj)

// function conta(operador, acumulador, ...numeros) {
//     for (let numero of numeros){
        
//         if (operador === '+') acumulador += numero;
//         if (operador === '-') acumulador -= numero;
//         if (operador === '/') acumulador /= numero;
//         if (operador === '*') acumulador *= numero;
//     }
//     console.log(acumulador);
// }
// conta('*', 1, 20, 30, 40, 50);

const conta = function(operador, acumulador, ...numeros) {
    for (let numero of numeros){
        
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
    console.log(arguments);
  
};
conta('*', 1, 20, 30, 40, 50);


