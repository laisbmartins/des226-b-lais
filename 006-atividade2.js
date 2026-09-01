let entrada = require("prompt-sync")();

console.log("Digite o nome de um filme a ser avaliado:");
let filme = entrada();
console.log("Que nota voce da para esse filme (0 - 10): ");
let nota = entrada();
console.log("Voce recomenda esse filme? (sim/nao:) ");
let recomenda = entrada();

let bilheteria;
let numPaisesExibidos = null;
let notaInt = parseInt(nota, 10);
let recomendaBool = recomenda === "sim" ? true : false;
let eNulo = numPaisesExibidos == null ? "null" : "outra coisa";

console.log("");
console.log("---------------------------");
console.log("bilheteria:" + typeof bilheteria);
console.log("numPaisesExibidos: " + typeof numPaiesExibidos);
console.log("notaInt: " + typeof notaInt);

console.log("recomendaBool: " + typeof recomendaBool);

entrada();
