const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numero of numeros) {
    console.log(numero);
    if (numero === 2) {
        console.log('Pulei o némero 2');
        continue;
}}