// Importa o módulo prompt-sync para receber entradas no terminal
const prompt = require("prompt-sync")();

// 1. Instancie a data atual utilizando new Date()
const dataAtual = new Date();

// 2. Solicite ao aluno o seu nome e sua matrícula através do prompt-sync
const nome = prompt("Digite seu nome: ");
const matricula = prompt("Digite sua matrícula: ");

// 3. Defina um array com 3 disciplinas que o aluno cursa
const disciplinas = ["Algoritmos", "Banco de Dados", "Estrutura de Dados"];

// 4. Crie uma função anônima/arrow function atribuída a uma variável que recebe esses dados e imprime um log formatado
const registrarLog = (nomeAluno, matriculaAluno, listaDisciplinas, data) => {
  console.log("\n--- LOG DE ACESSO AO LABORATÓRIO ---");
  console.log(`Data e Hora do Registro: ${data.toLocaleString("pt-BR")}`);
  console.log(`Aluno: ${nomeAluno}`);
  console.log(`Matrícula: ${matriculaAluno}`);
  console.log(`Disciplinas Cursadas: ${listaDisciplinas.join(", ")}`);
  console.log("------------------------------------\n");
};

// Executa a função para exibir o log
registrarLog(nome, matricula, disciplinas, dataAtual);

// 5. Ao final, use typeof para exibir o tipo da variável da data e o tipo da função
console.log("--- VERIFICAÇÃO DE TIPOS ---");
console.log(`Tipo da variável da data: ${typeof dataAtual}`);
console.log(`Tipo da variável da função: ${typeof registrarLog}`);
