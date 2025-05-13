/*
Loop do while
Nesta aula, vamos abordar a estrutura de repetição do while. Essa estrutura executa pelo menos uma vez, verificando a condição no final. Foi destacado que a verificação da condição ocorre no final, garantindo a execução do bloco pelo menos uma vez. A diferença do do while é que ele executa antes de verificar a condição.
*/

// Exemplo de uso do loop do while
let value = 0;
do{
    console.log("Estou dentro do loop do while");
    console.log("Valor atual: " + value);
    value ++;
    console.log("Valor atual: " + value);

}while(value < 10)