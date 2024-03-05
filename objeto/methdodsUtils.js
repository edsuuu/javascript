

const produto = { nome: 'Caneca', preco: 18 };

//para copiar o produto de cima
const outraCoisa = Object.assign({}, produto, {material: 'ferro'});
//definiar os valores diferente 
outraCoisa.nome = 'Computador'
outraCoisa.preco = 1500;

// console.log(produto);
// console.log(outraCoisa);

//descobrir as propriedades daquele objeto 
// console.log(Object.keys(produto));

// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// console.log(Object.values(produto));
// console.log(Object.entries(produto));


for(let entry of Object.entries(produto)){
    console.log(entry);
}

for(let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor);
}


for(let valor of Object.entries(produto)){
    console.log(valor[0], valor[1]);
}