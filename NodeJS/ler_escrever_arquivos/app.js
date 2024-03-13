const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');
const { log } = require('console');


// const planetas = [
//      {
//           nome: 'marte',
//           altitude: 12313412341
//      },
//      {
//           nome: 'plutao',
//           altitude: 13412341123
//      },
//      {
//           nome: 'mercurio',
//           altitude: 41234112313
//      },
//      {
//           nome: 'lua',
//           altitude: 34112313412
//      },
// ];

// const json = JSON.stringify(planetas, '', 2);

// escreve(caminhoArquivo, json);


//primeira opção --> 

// async function lerArquivo(caminho) {
//      const dados = await ler(caminho);
//      //  console.log(dados);
//      return dados;
// }

// const dadosArquivo = lerArquivo(caminhoArquivo).then(dados => {
//      console.log(dados);
// }).catch(e => {
//      console.log(e, 'ERROUUU ');
// });

// segunda opção -->


async function lerArquivo(caminho) {
     const dados = await ler(caminho);
     //  console.log(dados);
     renderizaDados(dados);
}

// function renderizaDados(dados) {
//      console.log(dados);
// }

function renderizaDados(dados) {
     dados = JSON.parse(dados);
     dados.forEach(element => {
          console.log(element);
     })

}


lerArquivo(caminhoArquivo);