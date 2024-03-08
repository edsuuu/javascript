
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

// esperaAi('fase 1 ', rand()).then(valor => {
//     console.log(valor);
//     return esperaAi('fase 2 ', rand());
// }).then(fase => {
//     console.log(fase);
//     return esperaAi('fase 3 ', rand());
// }).then(fase => {
//     console.log(fase);
//     console.log('Terminou');
// }).catch(e => {
//     console.log('Error ' + e);
// });

async function executa() {
    try {
        const fase1 = esperaAi('fase 1 ', rand(0, 3));
        console.log(fase1);

        setTimeout(() => {
            console.log('Essa Promisse esta pendendte ', fase1);
        }, 1100)

        const fase2 = await esperaAi('fase 2 ', rand(0, 3));
        console.log(fase2);

        const fase3 = await esperaAi('fase 3 ', rand(0, 3));
        console.log(fase3);

        console.log('Terminou na fase ' + fase3);
    } catch (e) {
        console.log(e);
    }
}
executa();