let entrada = require("prompt-sync")();
// comentário de 1 linha
let nome = "Laís"; // string ex: "qualquer texto"
let idade = 28; // number ex: 32, 3.14, -10
let trabalha = true; // boolean ex: true, false
let endereço = {
  rua: "Brasil",
  num: 40,
  bairro: "Centro",
}; // object ex: padrão chave/valor
let funcao = () => console.log("Oi"); // function ex: bloco de códigos

/* comentário
de mais de
uma lnha */

// exibindo tipos de variáveis
console.log("Tipos de variáveis");
console.log("Variável: nome:" + typeof nome);
console.log("Variável: idade:" + typeof idade);
console.log("Variável: trabalha:" + typeof trabalha);
console.log("Variável: endereço:" + typeof endereço);
console.log("Variável: funcao:" + typeof funcao);

// variáveis definidas sem valor
let nomeDigitado;
let idadeDigitada;
let trabalhaDigitado;

//pular uma linha
console.log();

// passando valores para as variáveis
nomeDigitado = entrada("Digite seu nome: ");
idadeDigitada = entrada("Qual sua idade? ");
trabalhaDigitado = entrada("Você trabalha?");

//mostando valor e tipo das variáveis
console.log("Nome: " + nomeDigitado + " - Tipo: " + typeof nomeDigitado);
console.log("Idade: " + idadeDigitada + " - Tipo: " + typeof idadeDigitada);
console.log(
  "Trabalha: " + trabalhaDigitado + " - Tipo: " + typeof trabalhaDigitado,
);
