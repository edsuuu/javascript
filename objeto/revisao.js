const pessoa = {
    nome: 'Edsu',
    sobrenome: 'ed',
    outroNome: 'LIM',
};

const chave = 'nome';

// console.log(pessoa[chave]);
// console.log(pessoa.sobrenome);
// console.log(pessoa['outroNome']);

const pessoa1 = new Object();

pessoa1.nome = 'AOBA';
pessoa1.sobrenome = 'TESTE';
pessoa1.idade = 2;
pessoa1.falarNome = function (){
    return (`${this.nome} esta falando seu nome`);
};

pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();

    return dataAtual.getFullYear() - this.idade ;
};

const pessoa2 = {
    nome: 'OLHA',
    sobrenome: 'A MUSICA',
};

// delete pessoa1.nome; para deletar algum dado do objeto 
console.log(pessoa1.getDataNascimento());
