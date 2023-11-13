// escreva uma função que recebe 2 numeros e retorne o valor maior dele 


function maiorNumero(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1
    } else {
        return numero2;
    }
}

//a função funciona desses 2 modos, a função vai retornar o maior numero

//aqui com uma varialvel
const maior = maiorNumero(1, 2);
console.log(maior);

//aqui apenas co o console.log
console.log(maiorNumero(10, 4));

//para uma melhoria nessa função 

function maiorNumero2(numero1, numero2) {
    if (numero1 > numero2) return numero1; //tiramos as chaves depois do if {}
    return numero2;  //tiramos apenas o else da função 
}

console.log(maiorNumero2(10, 4));


// para uma melhoria maior para logica 

function maiorNumero3(numero1, numero2) {
    return numero1 > numero2 ? numero1 : numero2;
}

console.log(maiorNumero3(10, 4));

//erro function 

const max = (numero1, numero2) => {
    return numero1 > numero2 ? numero1 : numero2;
};
console.log(max(100, 20));

//para simplificar ainda mais

const max2 = (numero1, numero2) => numero1 > numero2 ? numero1 : numero2;
console.log(max2(100, 20));