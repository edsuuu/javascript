// Função que representa o botão do brinquedo
function apertarBotao() {
    console.log("Botão apertado! Música começando...");
    tocarMusica(function() {
        // Esta é a função de callback
        console.log("Música terminou! Luzes piscando...");
        piscarLuzes();
    });
}

// Função que simula a música tocando
function tocarMusica(callback) {
    // Simulando a música tocando por 3 segundos
    setTimeout(function() {
        console.log("Música terminou.");
        // Chama a função de callback depois de 3 segundos
        callback();
    }, 3000);
}

// Função que simula as luzes piscando
function piscarLuzes() {
    // Simulando as luzes piscando 5 vezes
    for (let i = 0; i < 5; i++) {
        setTimeout(function() {
            console.log("Luz " + (i + 1) + " piscando...");
        }, i * 500); // Cada luz pisca a cada 500 milissegundos
    }
}

// Simulação de apertar o botão
apertarBotao();
