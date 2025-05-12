/*
Loop while
Nesta aula, abordaremos a estrutura de repetição while, que executa um bloco de código enquanto uma condição é verdadeira. Vamos aprender como declarar e utilizar o while, com exemplos de verificação de condições e controle de execução. Também vamos utilizar a variável de controle execute para decidir se a repetição deve ou não continuar. Além disso vamos ver como utilizar o método prompt para interagir com o usuário e controlar a execução do while.
*/


let execute = true;

while (execute) {
    let response = window.prompt('Deseja continuar? (s/n)');
    if (response.toLowerCase() === 's') {
        execute = true;
    } else {
        execute = false;
    }
}

console.log('Fim da execução!');