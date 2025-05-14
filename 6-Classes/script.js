/*  AULA 05 - Clases em JavaScript
O que é método estático?
Nesta aula, vamos aprender o conceito de método estático em programação. Vamos ver como criar e utilizar um método estático em uma classe, destacando a diferença de acesso entre métodos estáticos e não estáticos. Demonstraremos que métodos estáticos podem ser acessados sem a necessidade de instanciar a classe, enquanto métodos não estáticos requerem a instanciação da classe.
*/

class User {
    static showMessage(message){
        console.log(message);
    }
}

User.showMessage("Esta é uma mensagem!");
