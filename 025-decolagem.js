const entrada = require("prompt-sync")();

//controle da repetiçao no inicio
let contador = parseInt(entrada("Digite um número inteiro:"));

for (let n = contador; n >= 0; n--) {
  console.log(n);
}

entrada("Decolagem autorizada. Pressione ENTER para encerrar o programa!");
