let entrada = require("prompt-sync")();

let usuario = "lais";
let senha = "12345";
let usOk = false;
let snOk = false;
let acessoPermitido = false;

console.log("Insira seus dados para acessar o sistema!");

let logingUsuario = entrada("Nome de usuário: ");
let loginSenha = entrada("Senha: ");

if (usuario == logingUsuario.toLowerCase()) {
  console.log("Nome de usuário verificado com sucesso!");
  usOk = true;
}
if (senha == loginSenha) {
  console.log("Senha verificada com sucesso!");
  snOk = true;
}
if (usOk === true) {
  if (snOk === true) {
    acessoPermitido = true;
  }
}
if (acessoPermitido === true) {
  console.log("Acesso permitido!");
} else {
  console.log("Acesso negado!");
}
entrada("Pressione enter para finalizar o programa!");
