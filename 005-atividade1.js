let entrada = require("prompt-sync")();
// comentário de 1 linha
let nome = "Laís"; // string ex: "qualquer texto"
let anoNascimento = 1997; // number ex: 32, 3.14, -10
let pofissao = "desenvolvedora"; // boolean ex: true, false
let funcao = () => console.log("Oi"); // function ex: bloco de códigos

/* comentário
de mais de
uma lnha */

// exibindo tipos de variáveis
console.log("Tipos de variáveis");
console.log("Variável: nome:" + typeof nome);
console.log("Variável: idade:" + typeof anoNascimento);
console.log("Variável: trabalha:" + typeof profissao);
console.log("Variável: funcao:" + typeof funcao);

// variáveis definidas sem valor
let nomeDigitado;
let idadeDigitada;
let trabalhaDigitado;

//pular uma linha
console.log();

// passando valores para as variáveis
nomeDigitado = entrada("Digite seu nome: ");
anoNascimentoDigitado = entrada("Qual ano voce nasceu? ");
profissaoDigitado = entrada("qual sua profissao?");

//mostando valor e tipo das variáveis
console.log("Nome: " + nomeDigitado + " - Tipo: " + typeof nomeDigitado);
console.log(
  "Idade: " +
    anoNascimentoDigitado +
    " - Tipo: " +
    typeof anoNascimentoDigitado,
);
console.log(
  "Trabalha: " + profissaoDigitado + " - Tipo: " + typeof profissaoDigitado,
);
