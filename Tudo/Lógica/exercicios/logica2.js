// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
//retorne true se a imagem estiver no modo paisagem.

function ePaisagem(largura, altura) {
    return largura > altura ? true:false;
}
console.log(ePaisagem(1920, 1080));
console.log(ePaisagem(1080,1920));

//melhorias "tem cada tipo de resumo de  melhoria na pasta ./exercicios/logica1"

const ePaisagem1 = (largura, altura) => largura > altura;
console.log(ePaisagem1(1920, 1080));
