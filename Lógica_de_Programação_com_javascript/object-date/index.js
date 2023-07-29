//sempre para usar a função date precisamos declarar antes new q é uma funçao construtora 
//toda função construtora começa com letra maiuscula
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
// 01/01/1970 Timestamp unix ou epoca unix
// const tresHoras = 60 * 60 * 3 * 1000; // 3 horas em milisegundos
// const umDia = 60 * 60 * 24 * 1000; // 1 dia em milisegundos
// const data = new Date(0 + tresHoras + umDia); // passando a data de hoje;

//const data = new Date(2023, 3, 20, 15, 30, 60); // dentro da () é  ano, mÊs, dia, hora, minuto, segundo, milisegundos;
//os meses começa a partir de 0 entao, 0 = janeiro, 1 = fevereiro

//data como string

const data = new Date('2023-07-29 20:20:59'); //passando a data como string
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()); //mes começa a partir de 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minuto', data.getMinutes());
console.log('Segundo', data.getSeconds());
console.log('Milisegundos', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); // 0 = domingo, 6 = sabado
//formatação de data
console.log(data.toString());



console.log(Date.now()); // transforma a data em milisegundos 1690643135773

const dataMili = new Date(1690643135773);
console.log(dataMili.toString());

