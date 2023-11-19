//retorne apenas os numeros maiores que 10 do array 

const numeros = [5, 2, 10, 1, 20, 8, 5, 30, 40, 50, 60, 70, 11, 80, 90];

function callbackFilter(valor) {
    //logica 1 
    // if (valor > 10) {
    //     return true;
    // } else {
    //     return false;
    // }
    //logica 2
    return valor > 10;
}
//ouuu ter uma const que resume em 1 linha 

const numeroFiltrados = numeros.filter(valor => valor > 10);

//console.log(numeroFiltrados);

const pessoas = [
    { nome: 'Luiz', idade: 62 },
     { nome: 'Maria', idade: 23 },
      { nome: 'Eduardo', idade: 55 },
       { nome: 'Leticia', idade: 19 },
        { nome: 'Rosana', idade: 32 }
    ];

    const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >=5);
    
    const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));

    console.log(nomeTerminaComA);

    