function gerarNumAle(min, max, numerosGerados) {
    var num;
    do {
        num = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (numerosGerados.includes(num));
    return num;
}

function gerarNumerosLotomania() {
    var numeros = [];
    for (var i = 0; i < 6; i++) {
        numeros.push(gerarNumAle(0, 60, numeros));
    }
    return numeros;
}

function gerarNumeros() {
    var numeros = [];
    for (var i = 0; i < 50; i++) {
        numeros.push(gerarNumAle(0, 100, numeros));
    }
    return numeros;
}

