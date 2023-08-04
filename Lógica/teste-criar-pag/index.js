
// Criando as div
const containerDiv = document.createElement('div');
const conteudoDiv2 = document.createElement('div');
const conteudoDiv = document.createElement('div');
const titulo = document.createElement('h1');
const lorem = document.createElement('p');
const titulo2 = document.createElement('h1');
const lorem2 = document.createElement('p');

containerDiv.id = 'container';
conteudoDiv.id = 'conteudo';
conteudoDiv2.id = 'conteudo2'
titulo.textContent = 'Título';
lorem.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
titulo2.textContent = 'Título';
lorem2.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

// Adicionar a div container ao body do documento HTML
document.body.appendChild(containerDiv);

// Adicionar a div conteúdo à div container
containerDiv.appendChild(conteudoDiv);
containerDiv.appendChild(conteudoDiv2);
// Adicionar o título e o texto à div conteúdo
conteudoDiv.appendChild(titulo);
conteudoDiv.appendChild(lorem);
// Adicionar o título e o texto à div conteúdo2
conteudoDiv2.appendChild(titulo2);
conteudoDiv2.appendChild(lorem2);

//estilo 

containerDiv.style.backgroundColor = 'black';
containerDiv.style.color = 'white';
containerDiv.style.padding = '20px';
containerDiv.style.borderRadius = '10px';
containerDiv.style.margin = 'auto';
containerDiv.style.width = '600px';
containerDiv.style.height = '1000px';
containerDiv.style.display = 'flex';
containerDiv.style.flexDirection = 'column';
containerDiv.style.justifyContent = 'cennter';

conteudoDiv.style.margin = '10px';
conteudoDiv.style.textAlign = 'center';
conteudoDiv.style.backgroundColor = 'gray';
conteudoDiv.style.color = 'white';
conteudoDiv.style.height = '500px';
conteudoDiv.style.padding = '10px';
conteudoDiv.style.borderRadius = '10px';

titulo.style.margin = 'auto';
titulo.style.backgroundColor = 'blue';
titulo.style.textAlign = 'center';
titulo.style.width = '100px';

conteudoDiv2.style.margin = '10px';
conteudoDiv2.style.textAlign = 'center';
conteudoDiv2.style.backgroundColor = 'gray';
conteudoDiv2.style.color = 'white';
conteudoDiv2.style.height = '500px';
conteudoDiv2.style.padding = '10px';
conteudoDiv2.style.borderRadius = '10px';

titulo2.style.margin = 'auto';
titulo2.style.backgroundColor = 'blue';
titulo2.style.textAlign = 'center';
titulo2.style.width = '100px';