const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Cadastro dos 3 usuários padrão (login, senha e saldo)
const user1Login = "aluno";
const user1Senha = "12345";
const user1Saldo = 500.0;

const user2Login = "maria";
const user2Senha = "abcde";
const user2Saldo = 1200.0;

const user3Login = "joao";
const user3Senha = "98765";
const user3Saldo = 0.0; // Usuário com saldo <= 0

console.log("=== BEM-VINDO AO CAIXA ELETRÔNICO ===");

rl.question("Informe o seu usuario: ", (loginDigitado) => {
  rl.question("Informe a sua senha: ", (senhaDigitada) => {
    // Normalizando o login digitado para comparar ignorando maiúsculas e minúsculas
    const loginLower = loginDigitado.toLowerCase();

    // Variáveis booleanas de controle de acesso
    let usOk = false;
    let snOk = false;
    let saldoDisponivel = 0;
    let nomeUsuario = "";

    // 1. Autenticação e busca de usuário usando APENAS IF e ELSE
    if (loginLower === user1Login.toLowerCase()) {
      usOk = true;
      if (senhaDigitada === user1Senha) {
        snOk = true;
        saldoDisponivel = user1Saldo;
        nomeUsuario = user1Login;
      }
    } else {
      if (loginLower === user2Login.toLowerCase()) {
        usOk = true;
        if (senhaDigitada === user2Senha) {
          snOk = true;
          saldoDisponivel = user2Saldo;
          nomeUsuario = user2Login;
        }
      } else {
        if (loginLower === user3Login.toLowerCase()) {
          usOk = true;
          if (senhaDigitada === user3Senha) {
            snOk = true;
            saldoDisponivel = user3Saldo;
            nomeUsuario = user3Login;
          }
        }
      }
    }

    const acessoPermitido = usOk && snOk;

    // 2. Validação de Acesso
    if (!acessoPermitido) {
      console.log("\nAcesso negado! Usuario ou senha incorretos.");
      rl.close();
    } else {
      console.log(`\nAcesso permitido! Bem-vindo(a), ${nomeUsuario}.`);
      console.log(`Seu saldo atual e: R$ ${saldoDisponivel.toFixed(2)}`);

      // 3. Operação Financeira (Saque)
      rl.question("Qual valor voce deseja sacar? R$ ", (valorSaqueTexto) => {
        const valorSaque = parseInt(valorSaqueTexto, 10);

        // Validação do valor solicitado usando IF e ELSE
        if (isNaN(valorSaque)) {
          console.log("Valor invalido para saque.");
        } else {
          if (valorSaque <= 0) {
            console.log("Valor invalido. Digite um valor maior que zero.");
          } else {
            if (valorSaque > saldoDisponivel) {
              console.log("Saldo insuficiente para realizar esta operacao.");
            } else {
              // 4. Atualização de saldo e cálculo de cédulas com IF e ELSE
              saldoDisponivel = saldoDisponivel - valorSaque;

              console.log(`\nSaque realizado com sucesso!`);
              console.log(`Seu novo saldo e: R$ ${saldoDisponivel.toFixed(2)}`);

              let restante = valorSaque;

              // Cálculo de notas de R$ 50
              let notas50 = 0;
              if (restante >= 50) {
                notas50 = Math.floor(restante / 50);
                restante = restante % 50;
              }

              // Cálculo de notas de R$ 20
              let notas20 = 0;
              if (restante >= 20) {
                notas20 = Math.floor(restante / 20);
                restante = restante % 20;
              }

              // Cálculo de notas de R$ 10
              let notas10 = 0;
              if (restante >= 10) {
                notas10 = Math.floor(restante / 10);
                restante = restante % 10;
              }

              // Cálculo de notas de R$ 5
              let notas5 = 0;
              if (restante >= 5) {
                notas5 = Math.floor(restante / 5);
                restante = restante % 5;
              }

              console.log("\n--- Detalhes do Saque ---");
              console.log(`Notas de R$ 50: ${notas50}`);
              console.log(`Notas de R$ 20: ${notas20}`);
              console.log(`Notas de R$ 10: ${notas10}`);
              console.log(`Notas de R$ 5:  ${notas5}`);
              console.log(
                `Valor restante em moedas/notas menores: R$ ${restante}`,
              );
            }
          }
        }
        rl.close();
      });
    }
  });
});
