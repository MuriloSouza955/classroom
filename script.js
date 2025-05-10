//Crfianco o objeto
const obj = {}

// Criando um objeto com proprieddade e métodos
const user = {
    email: "murilo@email.com",
    age: 18,
    name: {
        firstName: 'Murilo', //camel case
        surname: "Souza",
    },
    address:{
        street: "Rua X",
        number: 23,
        city: "Rio de Janeiro",
        postal_code: "12345-678",  // snake case
    },
    message: ()=> {
        console.log(`Olá, ${user.name.firstName}`)
    }
}

// Acessando propriedades usando a notação de ponto

console.log(user.email)

console.log(user.name.firstName)

//Executa o método do objeto
user.message()

// notação de colchetes
console.log(user["email"])
console.log(user["name"]["firstName"])
user['message']()