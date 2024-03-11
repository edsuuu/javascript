import GeraCPF from './assets/modules/GeraCPF.JS';
import './assets/css/style.css';


function gerar() {
     const gera = new GeraCPF();
     const cpfGerado = document.querySelector('.cpf-gerado');
     cpfGerado.innerHTML = gera.geraNovoCpf();
}

document.addEventListener('DOMContentLoaded', () => {
     const botaoGerar = document.querySelector('.btn-gerar');
     if (botaoGerar) {
          botaoGerar.addEventListener('click', gerar);
     }
})