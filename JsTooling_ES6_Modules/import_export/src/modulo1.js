const nome = 'edsu';
const sobrenome = "lm"
const idade = 23;


export const nomesOBJ =  {nome : 'eds', sobrenome: 'lts'}


export class Pessoa {
     constructor(nome, sobrenome) {
          this.nome = nome; 
          this.sobrenome = sobrenome;
     }
}


function soma(x, y) {
     return x + y;

}

// export { nome, sobrenome, idade, soma};
export { nome as nome2, sobrenome, idade, soma};

