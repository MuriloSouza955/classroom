/*
Continue
Agora vamos aprender sobre a palavra reservada continue que pode ser utilizada em estruturas de repetição para pular uma iteração e ir para a próxima, sem encerrar o loop inteiro como o break faz. Quando a condição definida é atendida, o continue é acionado, pulando a execução da iteração atual. Isso é útil para evitar a execução de determinadas partes do código em loops.
*/

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // Pula a iteração quando i é igual a 5
    }
    console.log(i); // Exibe os números de 0 a 9, exceto o 5
}