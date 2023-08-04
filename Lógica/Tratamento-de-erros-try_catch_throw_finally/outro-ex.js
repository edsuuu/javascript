function retornaHora(data) {
    if (!(data instanceof Date)) //se essa data não foi a instancia de data
    console.log('Não é'); 
        throw new Error('data não é uma instancia de data');
    return data;

}
retornaHora('Dateee');