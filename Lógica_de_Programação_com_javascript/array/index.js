//todo array começa do 0 por exeplo [edson, lima, teles] para puxar em um console puxo 0 = edson, 1 = lima... 

const nomes = ['Edson', 'Lima', 'Teles', 1000, 2000];
const [primeiroNome, segundoNome, terceiroNome, ...resto] = nomes;

console.log(primeiroNome, segundoNome, terceiroNome);
console.log(resto);
console.log(`o meu nome é ${nomes[0]}, e meu sobrenome é ${nomes[1]}, e meu penultimo nome é ${nomes[2]} `);

//aqui seria uma atribuição via destruturação de um array