//contralamento de timers 

function mostrarHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });

}

function funcaoDoInterval(){
    console.log(mostrarHora());
}

setInterval(function () {
    console.log(mostrarHora());
}, 1000); //executa a função a cada 1 segundo

//para parar o timer
//clearInterval();

//para parar o timer com a função

let timer = setInterval(function () {
    console.log(mostrarHora());
}
    , 1000);
    
    setTimeout(function () {
        clearInterval(timer);
    }
    , 2000);