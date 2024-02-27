function* geradora1() {
    //codigo qualquer
    yield 'Valor 1';
    //codigo qualquer
    yield 'Valor 2';
    //codigo qualquer
    yield 'Valor 3';
}

const g1 = geradora1();
// para ultilizar a função geradora dentro do log usar g1.next()

console.log(g1.next());
console.log(g1.next());
console.log(g1.next());

console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);

//ao inves de usar console.log
//é possivel ultilizar uma função chamada for
//veja o exemplo abaixo

for (let valor of g1) {
    console.log(valor);
}

function* geradora2() {
    let i = 0;

    while (true) {
        yield i;
        i++;
    }
}

const g2 = geradora2();
///a cada console log é infinito a cada preenchimento de linha ele vai gerar um numero 

console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);


function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}


function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for (let valor of g4) {
    console.log(valor);
}

function* geradora5() {
    yield function () {
        console.log('Vim do y1');
    };

    yield function () {
        console.log('Vim do y2');
    };

    return function () {
        console.log('Vim do return');
    };

    yield function () {
        console.log('Vim do y3');
    };
    // essa y3 nao sera executada por ter um return para fechar a funcao
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;



func1();
func2();
func3();

