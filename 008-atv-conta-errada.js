let entrada = require("prompt-sync")();

let num1 = entrada("Digite um número: ");
let num2 = entrada("Digite outro número para somar: ");

let soma = num1 + num2;

console.log(`Resultado da soma:`);
console.log(`${num1} + ${num2} = ${soma}`);
console.log(`Tipo da variável num1: ${typeof num1}`);
console.log(`Tipo da variável num2: ${typeof num2}`);
console.log(`Tipo da variável soma: ${typeof soma}`);
