// Factory function (Função fábrica)
// Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,
    get nomeCompleto(){
    return `${nome} ${sobrenome}`

    },
    //metodos sao criados e separados por virgula
    fala/*function pode colocar function para funcionar essa funcao*/(assunto) {
      return `${this.nome} está ${assunto}.`;
    },

    altura: a,
    peso: p,
        /*Getter --> GET */ get imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}
//factory function acima/função fabrica


const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
const p2 = criaPessoa('João', 'Otávio', 1.90, 57);
const p3 = criaPessoa('Junior', 'Otávio', 1.5, 110);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);

    // Getter
