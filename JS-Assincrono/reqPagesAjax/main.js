// const request = obj => {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(obj.method, obj.url, true);
//         xhr.send();

//         xhr.addEventListener('load', () => {
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 resolve(xhr.responseText);

//             } else {
//                 reject(xhr.statusText);
//             }
//         });
//     })


// };

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregarPagina(el);
    }


});

async function carregarPagina(el) {
    try {
        const href = el.getAttribute('href');
        const response = await fetch(href);

        if (response.status !== 200) throw new Error('Erro 404 Nosso ');

        const html = await response.text();
        carregaResultado(html);
    } catch (error) {
        console.log(error);
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
};

//PARA RETORNAR COM FETCH
// fetch('pag4.html').then(resposta => {
//     if (resposta.status !== 200) throw new Error('Erro 404 Nosso ');
//     return resposta.text();
// }).then(html => {
//     console.log(html);

// }).catch(e => {
//     console.warn(e);
//     console.error(e);
// })