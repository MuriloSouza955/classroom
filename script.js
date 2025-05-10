const product = {
    name: "Teclado",
    quantity: 100,
}

//Atualizando o valor de uma propriedade de  um objeto
console.log(product.quantity),
product.quantity = 90, // usando notação de ponto
console.log(product.quantity)

console.log(product.name)
product['name'] = "Mouse" // usando a notação de colchetes
console.log(product.name)

