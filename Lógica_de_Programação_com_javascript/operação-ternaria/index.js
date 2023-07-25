// ? :
// se esse usuario tiver pontuação maior ou igual a 1000 ele é usuario vip
const ponuacao = 999;

// temos esse primeiro jeito de calcular com if e else 

// if (ponuacao >= 1000) {
//     console.log('Usuário VIP');
// } else {
//     console.log('Usuário normal');
// } 

// temos esse outro jeito so com o console e uma varialvel 

// console.log(ponuacao >= 1000 ? "Usuário VIP" : "Usuário normal");

// temos esse terceiro jeito 

const nivelUsuario = ponuacao >= 1000 ? 'Usuário VIP' : 'Usuário normal';
// (condição) ? valor verdadeiro : valor falso;

const corUsuario = null;
//usuario não escolher uma cor entao o valor é null
const corPadrao = corUsuario || 'Preta';
// fallback = caso não tenha cor escolhida q é a varialvel acima

// || = ou
// cor


console.log(nivelUsuario);