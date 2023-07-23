const nome = "Guanabara";
const nota = "10";
const idade = "25";
const altura = "1.80";
const numero = 1546.6;
const calc = (5 + 3) / 2;
const calc2 = 5 + 3 / 2;

//alert(calc)

document.writeln(`O valor total da compra é ${numero.toFixed(2).replace(".", ",")}<br>`
);
document.writeln(`Veja aqui alguns salarios de acordo com o tipo de moeda como por exemplo: <br><br> Em Real 
${numero.toLocaleString("pt-br", {
  style: "currency",
  currency: "BRL",
})} <br> Em dolar 
${numero.toLocaleString("pt-br", {
  style: "currency",
  currency: "USD",
})} <br> Em Euro 
${numero.toLocaleString("pt-br", {
  style: "currency",
  currency: "EUR",
})} <br><br> `);
// para trocar o ponto para virgula a gente incrementa o replace
document.writeln(`${nome.toUpperCase()} tem ${idade} anos de idade, com uma altura de ${altura} e sua nota na faculdade é de ${nota}.`
);



