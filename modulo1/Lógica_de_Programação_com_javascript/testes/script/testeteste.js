function meuEscorpo () {
    // const nome = prompt ('Digite seu nome:');
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado');

    const pessoa = [];

    function receberNome (evento) {
        evento.preventDefault();

        const nome = form.querySelector('#nome');

        pessoa.push ({
            nome: nome.value
        })
        resultado.body.innerHTML = `Seu nome é ${nome}`;
    }

    console.log(pessoa);

    form.addEventListener('submit', receberNome);
}



meuEscorpo();