// Factory function (Função fábrica)
// Constructor function (Função construtora)
function criaPessoa(nome, sobrenome){
  return{
    nome,
    sobrenome,
    fala/*function pode colocar function para funcionar essa funcao*/(assunto){
      return `${this.nome} esta ${assunto}`;
    }
  };
}
const p1 = criaPessoa('edsu', 'li ma')
const p2 = criaPessoa('teles', 'silva')
console.log(p2.fala('Falando sobre o assunto'));

    // Getter


    // Setter

    // Getter
