//                0       1         2   
const nomes = ['edson', 'lima', 'silva'];
nomes.push('eds')// para adicionar ao final do array 
nomes.unshift('eds')// para adicionar ao começo do array
//pop remove do final 
  
console.log(nomes);

//converter uma string para um array 

const nome1 = 'Edson Lima teles';
const nomes2 = nome1.split(' ')

console.log(nomes2);

//converter um array em para uma string 

const nome2 = [ 'Edson', 'Lima', 'teles' ];
const nomes3 = nome2.join(' ');

console.log(nomes3);