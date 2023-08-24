//argumentos que sustenta todos os argumentos enviados 
function funcao(a, b = 2, c = 4) {
    // b = b || 2; 
    //b é igual b ? b existe, b tem valor ? se tiver vai ser b se n tiver vai ser 0 
    console.log(a + b + c);
}

funcao(2);
