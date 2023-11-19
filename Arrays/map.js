//dobre os numeros 


const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosEmDobro = numeros.map(valor => valor * 2);

// console.log(numerosEmDobro);

//para cada elementos, retorne apenas uma string com o nome da pessoa
//remova apenas a chave "nome" do objeto 
//adicione uma chave id em cada objeto 


const pessoas = [
    { nome: 'Luiz', idade: 62 }, 
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 }, ]


    const nomes = pessoas.map(obj => obj.nome);
    const idades = pessoas.map(obj => ({idade: obj.idade}));

    const comIds = pessoas.map((obj, indice) => {

        //const para jogar o id na frente do nome do objeto { id, nome, idade }
        const newObj = {
            id: indice, ...obj
        };
 
        return newObj;
    });


    console.log(comIds);