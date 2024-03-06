class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;  

    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + 'O dispositivo já está ligado');

            return;

        }
        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(this.nome + ' ja desligado');
            return;
        }
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }

}

class Tablet extends DispositivoEletronico {
    constructor(nome, processador) {
        super(nome);

        this.processador = processador;
    }
    // ligar() {
    //     console.log('vc alterou o metodo ligar');
    // }
    falaOi() {
        console.log('Oi ');
    }
}

const s1 = new Smartphone('iPhone', 'Branco', '15 Pro Max');
// console.log(s1);

const t1 = new Tablet('iPad', true, 'Apple A16 Bionic');

// t1.ligar();
t1.falaOi();

console.log(t1);