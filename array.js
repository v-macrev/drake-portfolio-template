// O array no JS é um objeto (internamente), não existe o tipo de dado (estrutura) array no JS. O array é uma estrutura indexada.
// É uma estrutura dinâmica, não tem tamanho fixo, cresce e diminui dinamicamente. Podemos utilizar dados heterôgeneos nos arrays, pela linguagem ser fracamente tipada.

// Testando
console.log(typeof Array, typeof new Array, typeof []);

// Boas práticas de programação é trabalhar com dados do mesmo tipo no array.
let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);

// Vamos reatribuir para a variável aprovados, repare no tipo de variável let que nos permite fazer isso!
// Utilizando o array literal, recomendação para você utilizar é array literal!
aprovados = ['Bia', 'Carlos', 'Ana']
// A forma que temos para acessar os atributos de uma array é através de um índice.
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
// Não temos índice 3 no array de aprovados, retorno no JS é undefined.
console.log(aprovados[3]);

// Formas válidas para adicionar um elemento no fim do array
aprovados[3] = 'Paulo';
aprovados.push('Fernando');
// Adicionamos Paulo na posição já existente (4) e mais um elemento;
console.log(aprovados.length);

// E se adicionarmos um elemento na posição de índice 9, os valores entre os ínidices vão ficar undefined mas vão existir
aprovados[9] = 'Rafael';
console.log(aprovados.length);
console.log(aprovados [8] === undefined);

console.log(aprovados);

// Alguns métodos de arrays

aprovados.sort();
console.log(aprovados);

// Formas de exclusao
delete aprovados[1]; //exclui o elemento e coloca undefined na posição deletada (o array não é reordenado)
console.log(aprovados[1]);

// Criando um novo array

aprovados = ['Bia', 'Carlos', 'Ana'];

// Método splice(), adiciona elementos em um certo índice e remove, e adicionar e remover ao mesmo tempo
// Como remover, inicia no índice do primero parâmetro e remove quantos elementos desejarmos a partir do segundo parâmetro
// Variar os exemplos
//aprovados.splice(1, 2);
console.log(aprovados);
// Como adicionar elementos, variando o segundo parâmetro ...
aprovados.splice(1, 2, 'Elemento1', 'Elemento2');


