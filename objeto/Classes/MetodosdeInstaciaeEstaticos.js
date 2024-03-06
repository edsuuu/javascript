//aula 105

function teste() {
    console.log('testeeee ');
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste();
    }

    aumentarVolume() {
        this.volume += 2;
    }
    //metodo de instacia
    diminuirVolume() {
        this.volume -= 2;
    }

    //metodo estatico
    static trocarPilha(x , y) {
        console.log('Vou trocar ');
        return x * y;
    }
}

const tv1 = new ControleRemoto('LG');

// for(let i = 0; i < 10; i++) {
//     tv1.aumentarVolume();
// }

console.log(tv1);

console.log(ControleRemoto.trocarPilha(2, 4));
