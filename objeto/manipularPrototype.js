//New object -> Function constructor tem Um object.protorype 

const ojbA = {
    chaveA: 'A',

    //aqui seria o __proto__: Object.prototype
};
const ojbB = {
    chaveB: 'B',

};
const ojbC = new Object();
ojbC.chaveC = 'C';


//testar no navegador, objA.__proto__ === Object.prototype

Object.setPrototypeOf(ojbB, ojbA);

// console.log(ojbB.chaveA);

function Produto(nome, preco, desc = 0.5) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.desconto = function(persentual) {
    this.preco = this.preco - (this.preco * (persentual / 100));
};

Produto.prototype.aumento = function(persentual) {
    this.preco = this.preco + (this.preco * (persentual / 100));
};

const p1 = new Produto('Caneta', 50);  
// p1.desconto(3);//100% de desconto
p1.aumento(100);//100% de aumento

// console.log(p1);


//literal
const p2 = {
    nome: 'Geladeira',
    preco: 4500,
};
Object.setPrototypeOf(p2, Produto.prototype); // para usar a função do produto se n tiver nao funciona 
p2.desconto(100);
// p2.aumento(100);
// console.log(p2);


//podemos usar o Object.create() para criar um objeto literal sem o uso do new
const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 100
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 200
    }
});

console.log(p3);