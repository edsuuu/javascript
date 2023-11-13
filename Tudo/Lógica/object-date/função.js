function zeroAesquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAesquerda(data.getDate());
    const mes = zeroAesquerda(data.getMonth() + 1);
    const ano = zeroAesquerda(data.getFullYear());
    const hora = zeroAesquerda(data.getHours());
    const minutos = zeroAesquerda(data.getMinutes());
    const segundos = zeroAesquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
}


const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);