const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let numero of numeros) 
for (let i in numeros) {

    let numero = numeros[i]; //variavel para funcionar o for in,,, o for of tem q retirar essa variavel 

    if (numero === 2) {
        console.log('Pulei o número 2');
        continue; //pula o numero 2 e continua a contagem 
    }

    console.log(numero); //imprime todos os numeros do array

    if (numero === 7) {
        console.log('Encontrei o número 7, saindo...');
        break; //se achar o numero 7, o break vai sair do laço
    }   
    
    console.log(numero);
}

const num1 = console.log();