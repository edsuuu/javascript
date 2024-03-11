import { nome2, sobrenome, idade, soma, Pessoa} from "./modulo1";
// import { nome as nome2, sobrenome, idade, soma } from "./modulo1";

//para importar tudo a gente ultiliza 
// import * as modulo1 from "./modulo1";
//todos os arquivos precisa ta com export na frente e as que eu nao quero n coloco export 

//para desclar o outro nome na variavel a gente colocaria o AS 

console.log(nome2, sobrenome, idade);
console.log(soma(5, 5));

const p1 = new Pessoa('eds', 'lts');

console.log(p1);