//return
//Retorna um valor 
//Termina a funcão 

function soma(a, b) {
    return a + b;
}
console.log(soma(5, 2));

function soma2(a, b) {
    console.log(a + b);
}
soma2(5, 2);

function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome }
}

const p1 = criaPessoa('Edson', 'Lima');
const p2 = {
    nome: 'Edsu',
    sobrenome: 'Teles'
};
console.log(typeof p1);
//com o typeof ele mostra o tipo do conteudo, se é uma string, number, objeto ou array

console.log(p2);

//outro sem retorno

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Olá');
console.log(olaMundo('Mundo'));
