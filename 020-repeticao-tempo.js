let i = 1;

console.log("Iniciando contagem na mesma linha...");

const intervalo = setInterval(() => {
  //limpa a linha atual do terminal e move o cursor para o inicio( coluna0)
  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);

  // escreve o numero atual na mesma linha
  process.stdout.write(`Contagem: ${i}`);

  if (i === 10) {
    clearInterval(intervalo); // para o contador quando chega a 10
    console.log("\n\n Fim da contagem!");
  }
  i++;
}, 3000); // 30000 milissegundos = 3 segundos
