//função anonima 
function retornaFuncao() {
    const nome = 'Edson';
    return function() {
        return nome;
    }
}
const funcao = retornaFuncao();
console.log(funcao);