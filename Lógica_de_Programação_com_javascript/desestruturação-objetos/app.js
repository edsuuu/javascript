const pessoa = {
    nome: 'Edson',
    sobrenome: 'Lima',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
}

 const { id = 'ID Não existe', nome, sobrenome, ...resto } = pessoa;

//atribuição via desestruturação
const { endereco: { rua, numero } , endereco /*trazer o endereço completo */ } = pessoa;

console.log(id,",", nome, sobrenome, resto);
console.log('');
console.log(rua,",", numero, endereco );




