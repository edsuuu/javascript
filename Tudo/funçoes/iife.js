// // IIFE -> IMMEDIATELY INVOKED FUNCTION EXPRESSION
// //protege do escopo global 


function qualquerCoisa() {
    console.log(1234);
}

qualquerCoisa();

(function() {
    console.log(4);
})

();

(function(idade, peso, altura ) {
    const sobrenome = 'teles';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;

    }

    function falanome() {
        console.log(criaNome('Edson'));
    }
    falanome();
    console.log(idade, peso, altura);
}) (30, 52, 1.81);


const minhaIIFE = (function() {
    // IIFE para encapsular o código e evitar poluição do escopo global

    // Objeto de configuração
    var config = {
        apiUrl: "https://api.example.com",
        apiKey: "my_api_key"
    };

    // Função para carregar dados do servidor
    function carregarDados() {
        // Código para fazer uma requisição AJAX para o servidor
        // e carregar os dados necessários
        console.log("Carregando dados do servidor...");
    }

    // Inicialização
    carregarDados();
})();


