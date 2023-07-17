const pessoa1 = {
    nome: 'Edson',
    sobrenome: 'Lima',
    idade: 20,

    fala () {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`); 
        // this dentro da função está chamando a função pessoa1  tuido é separado por , e funções 
    }
}

pessoa1.fala();