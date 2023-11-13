const data = new Date('2023-07-29 12:23:00');
let diaSemana = data.getDay();
let diaSemanaTexto;

//diasemana é a varialvel que eu quero checar dentro dos ()
switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda-feira';
        break;
    case 2:
        diaSemanaTexto = 'Terça-feira';
        break;
    case 3:
        diaSemanaTexto = 'Quarta-feira';
        break;
    case 4:
        diaSemanaTexto = 'Quinta-feira';
        break;
    case 5:
        diaSemanaTexto = 'Sexta-feira';
        break;
    case 6:
        diaSemanaTexto = 'Sábado';
        break;
}

// if (diaSemana === 0) {
//     diaSemanaTexto = 'Domingo';
// } else if (diaSemana === 1) {
//     diaSemanaTexto = 'Segunda-feira';
// } else if (diaSemana === 2) {
//     diaSemanaTexto = 'Terça-feira';
// } else if (diaSemana === 3) {
//     diaSemanaTexto = 'Quarta-feira';
// } 
// else if (diaSemana === 4) {
//     diaSemanaTexto = 'Quinta-feira';
// } 
// else if (diaSemana === 5) {
//     diaSemanaTexto = 'Sexta-feira';
// } 
// else if (diaSemana === 6) {
//     diaSemanaTexto = 'Sábado';
// } 
// else if (diaSemana === 7) {
//     diaSemanaTexto = 'Domingo';
// }

// console.log(diaSemana, diaSemanaTexto);

console.log(diaSemana, diaSemanaTexto);

