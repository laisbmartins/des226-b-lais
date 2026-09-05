let entrada = require("prompt-sync")();

let email = entrada("Digite o seu e-mail: ");
let cpf = entrada("Digite o seu CPF: ");
let cep = entrada("Digite o seu CEP: ");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const cpfRegex = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;
const cepRegex = /^\d{5}-?\d{3}$/; // se retirarmos a "?" o hífen será obrigatório

console.log(`E-mail válido: ${emailRegex.test(email) ? "Sim" : "Não"}`);
console.log(`CPF válido: ${cpfRegex.test(cpf) ? "Sim" : "Não"}`);
console.log(`CEP válido: ${cepRegex.test(cep) ? "Sim" : "Não"}`);
