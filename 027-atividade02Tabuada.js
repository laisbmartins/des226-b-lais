const entrada = require("prompt-sync")();

let inicio = Number(entrada("Digite o número inicial: "));
let fim = Number(entrada("Digite o número final: "));

console.log("\n===== TABUADA DO INTERVALO =====");

for (let numero = inicio; numero <= fim; numero++) {
  console.log("\n-----------------------------");
  console.log(`       TABUADA DO ${numero}`);
  console.log("-----------------------------");

  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

entrada("\nPressione ENTER para encerrar...");
