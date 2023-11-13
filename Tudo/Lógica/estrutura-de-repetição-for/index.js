//for é uma estrutura de repetição com teste lá no início

// i de index
for (let i = 0; i <= 5; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);
}

const frutas = ['maça', 'pera', 'uva', 'melancia'];
for (let i = 0; i < frutas.length; i++) {
    console.log(i);
    console.log(frutas[i]);
    console.log(`Indice ${i}, Fruta ${frutas[i]}`);

}

//primeira forma de fazer
// }
// for (let i = 0; i < 10; i++) {}
//preciso de uma variavel "let"
