let entrada = require("prompt-sync")();

let strNum1 = entrada("Insira o 1° valor:");
let strNum2 = entrada("Insira o 2° Valor:");

let num1 = parseInt(strNum1);
let num2 = parseInt(strNum2);

let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
let inteiroDivisao = parseInt(num1 / num2);
let restoDivisao = num1 % num2;

console.log(`Soma: ${num1} + ${num2} = ${soma}`);
console.log(`Subtracao: ${num1} - ${num2} = ${subtracao}`);
console.log(`Multiplicacao: ${num1} * ${num2} = ${multiplicacao}`);
console.log(`Divisao: ${num1} / ${num2} = ${divisao}`);
console.log(`Inteiro da Divisao: ${num1} / ${num2} = ${inteiroDivisao}`);
console.log(`Resto Divisao: ${num1} % ${num2} = ${restoDivisao}`);
