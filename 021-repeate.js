const entrada = require(`prompt-sync`)();

senha = `1234567`;
//repeticao com teste no final
do {
  senhaDigitada = entrada(`Digite a sua senha:`);
} while (senha !== senhaDigitada);

entrada(`Sistema acessado com sucesso! Pressione ENTER para prosseguir.`);
