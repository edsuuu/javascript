const largura = 10; 
const comprimento = 30; 

const metroQuadrado = 200; 

function calcArea(a, b) {
    const resultado = largura * comprimento;

    const terreno = a * b;

    return { resultado, terreno };
}


console.log(calcArea(2, 10))

