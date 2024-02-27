// funcao construtora -> objetos  
// funcao fabrica -> objetos
// construtora -> pessoa(new)

function Pessoa(nome, sobrenome) {
    //atributos ou metodos privados 
    const ID = 123456;

    const metodoInterno = () => {

    }
    
    //atributos ou metodos publicos 
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ' Sou uma função');
    }
}
;
const p1 = new Pessoa('edson', 'edsu');
const p2 = new Pessoa('edson', 'edsu');

// console.log(p1)


p1.metodo()
p2.metodo()