let entrada = require("prompt-sync")();

let nome = entrada("Digite seu nome:");
let profissao = entrada("Digite sua profissão:");
let ano = entrada("Digite o ano em que nasceu:");

console.log("");
console.log("------------------------");
console.log("Nome: " + nome);
console.log("Profissão: " + profissao);
console.log("Ano de nascimento: " + ano);

console.log("------------------------");
console.log("---TIPOS DAS VARIÁVEIS--");
console.log("Nome: " + typeof nome);
console.log("Profissão: " + typeof profissao);
console.log("Ano de nascimento: " + typeof ano);
console.log("------------------------");

entrada();
