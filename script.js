/*
Adicionando e removendo um item do array
Nesta aula, aprenderemos a adicionar e remover itens em um array em JavaScript. Utilizamos os métodos push para adicionar no final, unshift para adicionar no início, shift para remover do início e pop para remover do final do array. Esses métodos são úteis para manipular arrays de forma eficiente em aplicações JavaScript.

*/
let users = []
console.log(users)

users.push('Murilo') // Adicionando um item no final do array

users.push('Lucas') // Adicionando outro item no final do array

users.push('João') // Adicionando mais um item no final do array

users.unshift('Ana') // Adicionando um item no início do array

users.shift() // Removendo o primeiro item do array ('Ana')

users.pop() // Removendo o último item do array ('João')

console.log(users) // Exibindo o array atualizado
