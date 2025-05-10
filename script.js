/*
O que é uma função construtora?
Nesta aula, vamos aprender sobre funções construtoras em JavaScript. Vamos criar uma função construtora para instanciar objetos, explicando o uso do operador new. Também vamos criar objetos com propriedades e métodos, além de exemplificar a instância de objetos com a função construtora. Também veremos a possibilidade de usar funções construtoras disponíveis no JavaScript, como String e Date. Além disso, vamos aprender uma abordagem alternativa para criar objetos usando funções construtoras.
*/

function createProduct(name){
    const product = {}
    
    product.name = name
    product.details = function(){
        console.log(`O nome do produto é: ${this.name}`)
    }
    return product
}

const product1 = new createProduct('Caneta')
console.log(product1.name)
product1.details()

const product2 = new createProduct('Mouse')
console.log(product2.name)
product2.details()

//exemplos de funções construtoras dusponíveis no JS

let myName = new String('Murilo')
console.log(myName)

let price = "40.6".replace(".", "")
console.log(price)

let date = new Date("2025-01-05")
    console.log(date)

function Person(name){
    this.name = name
    this.message = function (){
        console.log(`Olá ${this.name}`)
    }
}

const person1 = new Person('Murilo')
console.log(person1.name)
person1.message()
    