//FUNCAO CONSTRUTORA -> MODE(CLASSE)

//PROTOTYPE -> OBJETO QUE CONTEM TODAS AS FUNCOES DO OBJETO

//Javascript é baseado em prototipos para passar propriedades e metodos de um objeto para outro

//Definição de prototipo, prototipo é o termo usado para se referir ao que foi criado pela primeira vez servindo de modelo ou molde para futuras produções

//todos os objetos tem uma referencia interna para um prototipo (__proto__)
// que vem da propriedade prototype da funcao construtora que foi usada para cria-lo, quando tentamos acessar um membro de um objeto primeiro o motor do js vai tentar encontrar este membro no proprio objeto e depois a cadeira de prototipos é usada ate o topo (null) ate encontrar (ou nao) tal membro 
 

function Pessoa(nome, sobrenome) {

    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => { 'Original:', '' + this.nome + ' ' + this.sobrenome };
}

Pessoa.prototype.nomeCompleto = () => {
    return this.nome + ' ' + this.sobrenome;
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira'); 
const data = new Date(); // <-- date = funcao construtora, data = objeto criado a partir de uma funcao construtora


console.dir(p1);
console.dir(data);

