const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Bruna', nota: 9.2, bolsista: true},
    {nome: 'Isabela', nota: 9.8, bolsista: false},
    {nome: 'Maria', nota: 8.7, bolsista: true}
]

// Passo 2
//Imprimir o array para ver o map (mapeia um vetor em outro resultando em um novo array mapeado)
// console.log(alunos.map(a => a.nota));


// Passo 1
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual);
    return acumulador + atual;
}, 10)

// Passo 4 utilizando uma function arrow
const resultado2 = alunos.map(a => a.nota).reduce((acumulador, atual) => acumulador + atual);
console.log(resultado2);


console.log(resultado);

// Passo 3  - Adicionar um valor inicial
// Se eu quisesse passar um valor inicial no valor de 10, adicionar 10 no Passo 1 }, 10

