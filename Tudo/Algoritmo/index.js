
let idade = 28;
let salario = 20000;
let nome = "Maria";
let experiencia = 5; // Anos de experiência

// Critérios de seleção
const idadeMinima = 25;
const salarioMinimo = 4500;
const nomeDesejado = "Maria";
const experienciaMinima = 3;

console.log(`A funcionaria ${nome}, tem ${idade} anos de idade, tem um salario de ${salario} reais, e tem ${experiencia} de experiencia na area`);


// Verificação dos critérios
if (idade >= idadeMinima && salario >= salarioMinimo && nome === nomeDesejado && experiencia >= experienciaMinima) {
  console.log("O candidato atende aos critérios e é elegível para o cargo.");
} else {
  console.log("O candidato não atende a todos os critérios para o cargo.");
}


