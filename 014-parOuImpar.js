const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Digite um numero: ", (entrada) => {
  let numero = parseInt(entrada);

  if (numero % 2 === 0) {
    console.log("o numero é par");
  } else {
    console.log("o numero é impar");
  }

  if (numero > 0) {
    console.log("o numero é positivo");
  } else if (numero < 0) {
    console.log("o numero é negativo");
  } else {
    console.log("o numero é 0");
  }

  rl.close();
});
