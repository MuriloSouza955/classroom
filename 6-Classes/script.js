/*  AULA 03 - Clases em JavaScript
Criando propriedades dentro das classes
Nesta aula, vamos aprender um pouco mais sobre o uso do this em classes em JavaScript, mostrando como criar propriedades e acessá-las.
*/

class Product {
    constructor(name) {
        this.name = name;
    }
}

const product1 = new Product("Notebook");
console.log(product1.name);

const product2 = new Product("Teclado");
console.log(product2.name);