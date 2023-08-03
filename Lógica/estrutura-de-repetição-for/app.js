//for classico - geralmente com iteráveis (array ou strings)
// for in - retorna o índice ou chave (string, array ou objetos)
// for of - retorna o valor em si (iteráveis, arrays ou strings)





const nome = 'Edson LIma';
const nome2 = ['Edson', 'Lima', 'Teles'];

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}
console.log('');
//for in 

for (const i in nome2) {
    console.log(nome2[i]);
}
console.log('');
//for of

for (const i of nome2) {
    console.log(i);
} 
    
//para objetos usar o for in 


const pessoa = {
    nome: 'Edson',
    sobrenome: 'Lima',
    idade: '25',
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}