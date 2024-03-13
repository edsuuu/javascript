const fs = require('fs').promises;

module.exports = (caminho, dados) => {
     fs.writeFile(caminho, dados, { flag: 'w' });

}

// flag a é para escrever em cima, w para apagar tudo e escrever

// fs.writeFile(caminhoArquivo, 'oi teste\n', { flag: 'a' });
// fs.writeFile(caminhoArquivo, 'oi teste\n', { flag: 'w' });
