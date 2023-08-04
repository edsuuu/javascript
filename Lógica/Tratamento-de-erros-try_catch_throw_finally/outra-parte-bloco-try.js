// try {
//     //try executa quando não há erros
// } catch (e) {
//     //catch executa quando há erros
// } finally {
//     //sempre executa dando erro ou nao 
//}

try {
    //fazendo um erro "comentar essa linha para nao ter erro"
    console.log('Abrir um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
    console.log('Fim do bloco try');

    try {
    console.log(B);
    } catch (e) {
        console.log('Tratando o erro');
    } finally {
        console.log('FINALLY: Eu sempre sou executado');
    }
} catch (e) {
    console.log('Tratando o erro');
} finally {
    console.log('FINALLY: Eu sempre sou executado');
}