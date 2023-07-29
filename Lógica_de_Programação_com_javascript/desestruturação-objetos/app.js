const pessoa = {
    nome: 'Edson',
    sobrenome: 'Lima',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
}

const { numero = 'Número Não existe', nome, sobrenome, ...resto } = pessoa;

console.log(numero,",", nome, sobrenome, resto);