const prs = document.querySelector('.paragrafos'); //para selecionar a div 
const ps = prs.querySelectorAll('p'); //para selecionar os paragrafos dentro da div
const bgEstilo = getComputedStyle(document.body); //para pegar o estilo do body
const backColor = bgEstilo.backgroundColor;

for (let p of ps) {
    p.style.borderRadius = '15px';
    p.style.backgroundColor = backColor;
    p.style.color = '#fff';
    p.style.padding = '10px';
}


