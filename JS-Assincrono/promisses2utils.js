//promisses -> promessas 

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject(' ce ta  no erro ');
                return;
            }
            resolve(msg.toUpperCase() + ' - Passei na promisse'); //promisse
            return;
        }, timeout)
    })
}
//metodos para usar
//promisses.all promisses.race  promisses.resolve  promisses.reject

// const promises = [
//     // 'Primeiro valor',
//     esperaAi('Promisse 1', rand(1, 5)),
//     esperaAi('Promisse 2', rand(1, 5)),
//     esperaAi('Promisse 3', rand(1, 5)),
//     esperaAi(1000, rand(1, 5)),
//     // 'Ultimo valor'
// ];

// Promise.race(promises).then(valores => {
//     console.log(valores);
// }).catch(err => { console.log(err); })


function baixaPagina() {
    // let emChace = true;
    let emChace = false;
    if(emChace){
        return Promise.resolve('Página em cache');
    }else {
        return esperaAi('Página baixada', 3000); //promisse
    }
}

baixaPagina().then(dadosPagina => {console.log(dadosPagina);}).catch(e => console.log('Error ' + e));