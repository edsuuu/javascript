function funcao() {
    console.log('hello');
    console.log(arguments);
}
funcao('valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,);

//argumentos que sustenta todos argumentos enviados


function funcaoTwo(a, b, c, d, e, f, g, h, i, j, k) {
    let total = 0;
    for (const argumento of arguments) {
        total += argumento;
    }
    console.log(total, a, b, c, d, e, f, g, h, i, j, k);
}
funcaoTwo(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);//colocar um numero apos a virgula do 10 
//o K se ele nao tiver um paramentro irar retornar undefined 