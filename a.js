function dobrarNumeros(numeros) {
    var numerosDobrados = [];
    for (var i = 0; i < numeros.length; i++) {
        numerosDobrados.push(numeros[i] * 2);
    }
    return numerosDobrados;
}

var numeros = [1, 2, 3, 4, 5];
var numerosDobrados = dobrarNumeros(numeros);
console.log("Números dobrados:", numerosDobrados);
