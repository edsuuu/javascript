const elementos = [
    {tag: 'p', texto: 'Qualquer texto'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const container = document.querySelector('.container');
const h1 = document.querySelector('h1');
const paragraph = document.querySelector('p');

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    container.appendChild(tagCriada);
}