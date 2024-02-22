//declarando função  tanto antes ou depois de declarar a função 

function falaoi() {
    console.log('Oie');
}

falaoi();

// fist-class objects as funções são objetos de primeira classe 

//expressao 

const souUmDado = function () {
    console.log('Sou um dado');
};
function executaUmaFuncao(funcao) {
    console.log('executando a função abaixo ');
    funcao();
}

executaUmaFuncao(souUmDado);

//arrow function 

const arrowF = () => {
    console.log('Sou uma arrow Function');
}
arrowF();

const obj = {
    falar() {
        console.log('Estou falando....');
    }
}
obj.falar();