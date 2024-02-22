//criamos uma função para poder tratar esse erro 

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser nÚmeros');
    }
    return x + y;

}
try {
    console.log(soma(1, 2));
    // console.log(soma('1', 2)); //se comentar essa linha não vai ter erro 
} catch (erro) {
    console.log('Algo deu errado');
    // console.log(erro); não mostrar isso no front para o usuario
    console.log('Alguma coisa amigavel para o usuario');

}