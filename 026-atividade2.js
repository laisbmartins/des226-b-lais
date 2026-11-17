const entrada = require("prompt-sync")();

let numero;
let soma = 0;
let quantidade = 0;

do {
  numero = Number(entrada("Digite um número real (0 para encerrar): "));

  if (numero !== 0) {
    soma += numero;
    quantidade++;
  }
} while (numero !== 0);

console.log("Soma total: " + soma);
console.log("Quantidade de números digitados: " + quantidade);
