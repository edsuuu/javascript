fonte.innerHTML = `@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');
.btn-tarefa:hover {
    background-color: gray;
    transition: .3s;
    color: white;
}
.apagar:hover {
    background-color: gray;
    transition: .4s;
    color: white;
}

li {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    background-color: gray;
    color: white;
    margin:30px ; 
    border-radius: 10px;
    padding: 10px;
}

li button {
    border-radius: 10px;
    margin: 10px auto 20px auto;
    padding: 6px;
    font-family: Open Sans, sans-serif;
    borderRadius: 10px;
    cursor: pointer;

}


`;

body.style.backgroundColor = 'rgb(17, 86, 102)';

container.style.backgroundColor = 'white';
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.maxWidth = '740px';
container.style.padding = '30px'
container.style.margin = '10% auto 0px auto'
container.style.borderRadius = '10px'

conteudo.style.display = 'flex'
conteudo.style.alignSelf = 'center'
conteudo.style.flexDirection = 'column'


titulo.style.fontSize = '3em'
titulo.style.textAlign = 'center'
titulo.style.fontFamily = 'Open Sans, sans-serif'
titulo.style.textTransform = 'Uppercase';


inputTexto.style.margin = '0px auto 20px auto';
inputTexto.style.width = '300px';
inputTexto.style.padding = '10px';
inputTexto.style.fontSize = '1.2em';
inputTexto.style.borderRadius = '10px';

botao.style.width = '200px';
botao.style.margin = '0px auto 20px auto';
botao.style.padding = '10px';
botao.style.fontFamily = 'Open Sans, sans-serif';
botao.style.borderRadius = '10px';
botao.style.cursor = 'pointer';

inputTitulo.style.margin = '0px auto 20px auto';
inputTitulo.style.width = '300px';
inputTitulo.style.padding = '10px';
inputTitulo.style.fontSize = '1.2em';
inputTitulo.style.borderRadius = '10px';

