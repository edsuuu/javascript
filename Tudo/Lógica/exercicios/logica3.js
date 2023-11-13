//escreva uma função que recebe um numero e retorne o seguinte
//numero è divisivel por 3 = Fizz
//numero é divisivel por 5 = Buzz
//numero é divisivel por 3 e 5 = FizzBuzz
//numero não é divisivel por 3 ou 5 = retorna o proprio numero
//checar se o numero é realmente um numero = NaN
//use a função com numeros do 0 a 100

function numeroFizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}

    console.log('a', numeroFizzBuzz('a'));

for (let i = 0; i <= 100; i++) {
    console.log(i, numeroFizzBuzz(i));
}

