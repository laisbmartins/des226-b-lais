// Array -> Lista ou Matriz de valores
let listaTimes = [
  "Corinthians",
  "Santos",
  "Atlético Mineiro",
  "Ceará",
  "Ponte Preta",
];

let listaMegaSena = [1, 21, 31, 41, 51, 59];

// Data
let hoje = new Date();

// Reges -> Expressão regular, serve para verificações de valores
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let email = "ewerton@email.com";

// NULL
let idade = null;

// UNDEFINED
let tamanho;

console.log("Array texto: ");
console.log(listaTimes);
console.log("Array numérico");
console.log(listaMegaSena);
console.log("Data: " + hoje);
console.log("Regex");
console.log(emailRegex.test(email));
console.log("Exemplo NULL: ");
console.log(idade);
console.log("Exemplo UNDEFINED: ");
console.log(tamanho);

console.log("");
console.log("");
console.log("TIPOS DAS VARIÁVEIS");
console.log("Array texto: ");
console.log(typeof listaTimes);
console.log("Array numérico");
console.log(typeof listaMegaSena);
console.log("Data: ");
console.log(typeof hoje);
console.log("Regex");
console.log(typeof emailRegex);
console.log("Exemplo NULL: ");
console.log(typeof idade);
console.log("Exemplo UNDEFINED: ");
console.log(typeof tamanho);
