const entrada = require(`prompt-sync`)();
// controle da repetição no inicio
let contador = 0;
while (contador < 10) {
  //enquando a variavel contador for maior ou igual a 10, vai almentar 1 no valor
  contador = contador + 1;
  console.log(contador);
}
entrada(`Pressione ENTER para encerrar o programa`);
