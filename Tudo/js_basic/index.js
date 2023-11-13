const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmCm = 1.80; // <-- NESTE LOCAL
let indiceMassaCorporal;
let anoNascimento;//definne a variavel mas inicia abaixo 

indiceMassaCorporal = peso / (alturaEmCm * alturaEmCm);
anoNascimento = 2023 - idade;

// console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
// console.log('tem', alturaEmCm, 'de altura e seu IMC é de', indiceMassaCorporal);
// console.log(nome, 'nasceu em', anoNascimento, '.');

// tipos de modelos como pode ser lido

// console.log(nome +  sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg');
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg.`)

// console.log('tem ' + alturaEmCm + ' de altura e seu IMC é de ' + indiceMassaCorporal);
console.log(`tem ${alturaEmCm} de altura e seu IMC é de ${indiceMassaCorporal}`);

// console.log(nome + ' nasceu em ' + anoNascimento + '.');
console.log(`${nome} nasceu em ${anoNascimento}.`)