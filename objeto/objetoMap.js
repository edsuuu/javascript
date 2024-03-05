const pessoas = [
    { id: 3, nome: 'Luiz' },
    { id: 2, nome: 'Maria' },
    { id: 1, nome: 'Helena' },
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ...pessoa };
// }


const novasPessoas = new Map();

for (const pessoa of pessoas){
    const {id } = pessoa;
    novasPessoas.set(id,{...pessoa})
}

for( const pessoas of novasPessoas.values()){
    console.log(pessoas);
}   

novasPessoas.delete(2);//so aparece no map 


console.log();

console.log(novasPessoas);
console.log();
console.log(novasPessoas.get(1));