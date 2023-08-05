//aqui estamos criando todos os elementos no html
// criar um espaço e uma linha a cada ul>li 
//

const container = document.createElement('div');
const conteudo = document.createElement('div');
const fonte = document.createElement('style');
const titulo = document.createElement('h1');
const inputTexto = document.createElement('input');
const botao = document.createElement('button');
const lista = document.createElement('ul');
const inputTitulo = document.createElement('input');

inputTitulo.type = 'text';
inputTitulo.className = 'input-titulo';
inputTitulo.placeholder = 'Digite o título da lista';




//atribuindo o tipo do elemento, se ele tem q ter classe o valor dele "um texto"
container.className = 'container';
conteudo.className = 'conteudo';

titulo.textContent = 'Lista de tarefas';


inputTexto.type = 'text';
inputTexto.className = 'input-tarefa';
inputTexto.placeholder = 'Escreva sua tarefa';

botao.className = 'btn-tarefa';
botao.textContent = 'Enviar Tarefa';

lista.className = 'tarefas';

//colocar os componentes no html 

document.head.appendChild(fonte)
document.body.appendChild(container); //div pai
//div filho
container.appendChild(conteudo);
conteudo.appendChild(titulo);
conteudo.appendChild(inputTitulo);
conteudo.appendChild(inputTexto);
conteudo.appendChild(botao);

conteudo.appendChild(lista);

//Funcionalidade 

//para descobrir qual tecla está sendo precinada tira o if e coloca console.log(e)

//capturar a tecla enter para poder enviar a tarefa 
inputTexto.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        if (!inputTexto.value) return;
        criaTarefa(inputTexto.value);
    }
});

function limparInput() {
    inputTexto.value = '';
    inputTexto.focus();
    inputTitulo.value = '';
    inputTitulo.focus();
}

//function "nome da funcção"(onde eu quero aparecer ) {}

function criaBotaoApagar(li) {
    const botaoApagar = document.createElement('button');
    li.innerText += ' ';
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar essa Tafera');
    li.appendChild(botaoApagar);
}

function criarLi() {
    const li = document.createElement('li');
    li.style.backgroundColor = 'gray'
    li.style.color = 'white'    
    li.style.margin = '10px 10px 10px 10px'
    li.style.padding = '30px'
    li.style.borderRadius = '10px'
    li.style.textAlign = 'justify'
    li.style.fontSize = '1.4em'
    return li;
}


function criaTarefa(textInput, tituloInput) {
    const li = criarLi();
    const tituloLi = document.createElement('h2'); // Criar um elemento de título
    tituloLi.innerText = tituloInput; // Definir o texto do título
    li.appendChild(tituloLi); // Adicionar o título ao li

    const textoLi = document.createElement('h2')
    textoLi.innerText = textInput;
    li.appendChild(textoLi);

    lista.appendChild(li);
    limparInput();
    criaBotaoApagar(li);
    salvarTarefas();
}


botao.addEventListener('click', function () {
    if (!inputTexto.value || !inputTitulo.value) return;
    criaTarefa(inputTexto.value, inputTitulo.value);
});


document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
    
});


function salvarTarefas() {
    const liTarefas = lista.querySelectorAll('li');
    const listaDeTarefas = [];

    for (const lista of liTarefas) {
        let tarefaTexto = lista.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim('');
        tarefaTexto = tarefaTexto.replace('[object HTMLInputElement]', '').trim();
        console.log(tarefaTexto);
        listaDeTarefas.push(tarefaTexto)

    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('lista', tarefasJSON);
}

function adicionaTarefasSalvas() {
    const lista = localStorage.getItem('lista');
    const listaDeTarefas = JSON.parse(lista);

    for(let lista of listaDeTarefas) {
        criaTarefa(lista, inputTitulo);
        
    }
}

adicionaTarefasSalvas();


