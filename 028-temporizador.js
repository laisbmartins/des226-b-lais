let segundos = 0;

let intervalo = setInterval(() => {
  segundos++;

  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);

  process.stdout.write(`Tempo decorrido: ${segundos} segundo(s)`);

  if (segundos === 15) {
    clearInterval(intervalo);

    process.stdout.write("\n⏰ Tempo limite de 15 segundos atingido!\n");
  }
}, 1000);
