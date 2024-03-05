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
// console.log(pessoa1.getDataNascimento());


//padroes de projeto, FACTORY FUNCTION / CONSTRUCTOR FUNCTIONS / CLASSES 
//

//factory function 
function criaPessoa1(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto(){ // 
            return `${this.nome} ${this.sobrenome}`
        }
    };
}

const pr1 = criaPessoa1('Edsuuuu', 'lima');

// console.log(pr1.nomeCompleto);
//se não ultlizar get ali em cima, tem q retornar o console assim console.log(pr1.nomeCompleto()); q seria os parenteses 

//retornaria assim no console : 
//Edsuuuu lima

//CONTRUCTOR FUNCTIONS 

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    //para congelar um objeto 
    Object.freeze(this);
}
const pr2 = new Pessoa('Edsuuuu', 'lima');

const pr3 = new Pessoa('lima', 'Edsuuuu');
//para alterar o valor nome da varial ultiza o codigo abaixo, mas não pode ta congelado na funcao Pessoa  
pr3.nome = 'Outro nome';

console.log(pr2);
console.log(pr3);
//retornaria assim no console : 
//Pessoa { nome: 'Edsuuuu', sobrenome: 'lima' }

// {} <- THIS -> THIS 
//o this é o objeto ent 

// CLASSES 
