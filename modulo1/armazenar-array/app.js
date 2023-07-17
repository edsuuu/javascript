function meuEscorpo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function receberEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

    pessoas.push({  // aqui estou puxando uma variavel  "pessoas" para dar uma função e dando um valor para trazer as informações dentro do array "push".
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value  //sempre que finlizar um parametro nã ultilizar , apenas ({ abrir e fechar parenteses e chaves}).
    });
    console.log(pessoas);

    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ` +
    `${peso.value} ${altura.value}</p>`;
}
    form.addEventListener('submit', receberEventoForm);
}
meuEscorpo();