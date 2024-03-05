// funcao construtora 

function Produto(nome, preco, estoque) {
    //chave publica
    this.nome = nome;
    this.preco = preco;

    // se for so pra um valor   defineProperty e se for para varios defineProperties
    // Object.defineProperty(this, 'estoque', {

    // });

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {

        enumerable: true, // mostra a chave 

        // value: function (){
        //     return estoque;
        // }, //mostrar o valor da chave 

        // value: estoque,
        // writable: true, // pode alterar a chave, trocar o valor do estoque 

        configurable: true, // coonfiguravel como false , nao pode apagar nem configurar , se tivesse true pode deletar a chave

        get: function () {
            return estoquePrivado;
        },

        set: function (valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('mensagem');
            }

            estoquePrivado = valor;
        }

    }
    );
}

    const prod1 = new Produto('Camiseta', 'R$: 20.00', 3);
    // // delete prod1.estoque;

    // console.log(Object.keys(prod1));
    // console.log(prod1);

    // for (let chave in prod1) {
    //     console.log(chave);


    // }

    // console.log(prod1);
    prod1.estoque = 1;
    console.log(prod1.estoque);
