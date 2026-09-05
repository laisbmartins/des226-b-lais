let entrada = require("prompt-sync")();

console.log("Digite o nome de um filme a ser avaliado:");
let filme = entrada();
console.log("Que nota você da para esse filme (0-10):");
let nota = entrada();
console.log("Você recomendaria esse filme? (sim/não:)");
let recomenda = entrada();

// eu controlo o formato
let bilheteria;
let numPaisesExibidos = null;
let notaInt = parseInt(nota, 10);
let recomendaBool = recomenda === "sim" ? true : false;
let ehNulo = numPaisesExibidos === null ? "null" : "outra coisa";

console.log("");
console.log("------------------------");
console.log("bilheteria: " + typeof bilheteria);
console.log("numPaisesExibidos: " + typeof numPaisesExibidos);
console.log("notaInt: " + typeof notaInt);
// o retorno de um null é object
console.log("recomendaBool: " + typeof recomendaBool);

entrada();
