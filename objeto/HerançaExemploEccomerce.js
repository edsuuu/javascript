// oq o cliente vende 
// Produtos - > aumento de preço e desconto
//camiseta = cor, caneca, = material  


function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
    this.preco = this.preco += quantia;

}

Produto.prototype.desconto = function (quantia) {
    this.preco = this.preco -= quantia;

}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype); //pega o prototipo do produto e cria um novo prototipo para camiseta (PROTOTIPE -> ´ É UM OBJETO VAZIO

Camiseta.prototype.constructor = Camiseta; // para que o constructor seja o camiseta e nao o produto

Camiseta.prototype.aumento = function (quantia) {
    this.preco = this.preco += quantia;
}//subir reais 

Camiseta.prototype.aumentoPorcentagem = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}

//função de herança
function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    //
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function () {
            return estoque;
        },
        set: function (valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}


Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('Caneca', 13, 'Plástico', 10);
const produto = new Produto('Gen', 111, '');
const camiseta = new Camiseta('Blusa', 7.5, 'azul');

camiseta.aumentoPorcentagem(100);
caneca.estoque = 100;

// console.log(caneca.estoque);
console.log(caneca);
console.log(produto);
// console.log(camiseta);
// console.log(produto);

