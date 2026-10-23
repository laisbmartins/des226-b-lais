const readline = require("readline");

const teclado = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("CARDÁPIO DE BEBIDAS");
console.log("A1 - Água ............... R$ 3,00");
console.log("B2 - Refrigerante ....... R$ 6,00");
console.log("C3 - Suco ................ R$ 5,00");

teclado.question(
  "Digite o código do produto desejado: ",
  function (codigoProduto) {
    switch (codigoProduto.toUpperCase()) {
      case "A1":
        console.log("\nProduto selecionado: Água");
        console.log("Valor: R$ 3,00");
        break;

      case "B2":
        console.log("\nProduto selecionado: Refrigerante");
        console.log("Valor: R$ 6,00");
        break;

      case "C3":
        console.log("\nProduto selecionado: Suco");
        console.log("Valor: R$ 5,00");
        break;

      default:
        console.log("\nCódigo inválido! Produto não encontrado.");
        break;
    }

    teclado.close();
  },
);
