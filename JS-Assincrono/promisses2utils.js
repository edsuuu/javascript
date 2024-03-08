//promisses -> promessas 

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, timeout) {

    return new Promise((resolve, reject) => {

        if (typeof msg !== 'string') reject(new Error('Error'));


        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promisse'); //promisse
        }, timeout)
    })
}
//metodos para usar
//promisses.all promisses.race  promisses.resolve  promisses.reject

const promises = ['Primeiro valor', esperaAi('Promisse 1', 3000), esperaAi('Promisse 2', 500), esperaAi('Promisse 3', 1000), 'Ultimo valor'];

Promise.all(promises).then(valores => {
    console.log(valores);
}).catch(err => {err})

