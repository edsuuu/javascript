//Arrow Function com desestruturação de parâmetros

const pessoa = { nome: 'João', idade: 30 };

const apresentar = ({ nome, idade }) => {
    return `Olá, meu nome é ${nome} e tenho ${idade} anos.`;
};

console.log(apresentar(pessoa)); // Saída: Olá, meu nome é João e tenho 30 anos.
