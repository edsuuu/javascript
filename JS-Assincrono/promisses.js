//promisses -> promessas 

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, timeout) {

    return new Promise((resolve, reject) => {
        
        if(typeof msg !== 'string') reject(new Error('Error'));


        setTimeout(() => {
            resolve(msg); //promisse
        }, timeout)
    })
}

esperaAi('Conexão com o BD', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Efetuada com sucesso', rand(1, 3));
    }).then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da Base', rand(3, 8));
    }).then(resposta => {
        console.log(resposta);
        return esperaAi(22222, rand(1, 3));//o erro cai aqui 
    }).then(resposta => {
        console.log(resposta);
    }).then(() => {
        console.log('Sou o ultimo a ser exibido');
    }).catch(err => {
        console.log('Erro: ' + err);
    });

