/*
Quais elementos o array aceita?
Nesta aula, vamos ver que um array pode conter elementos de diferentes tipos de dados, como texto, números, booleanos, funções e objetos.

*/

let myArray = [
    "Texto",
    123,
    true,
    function umaFuncao() {
        console.log("Eu sou uma função")
    },
    { name: "Murilo", age: 25 },
    [1, 2, 3, 4, 5],
    new Date(),
    null,
    undefined,
]
console.log(myArray)

myArray[3]() // Chama a função que está dentro do array