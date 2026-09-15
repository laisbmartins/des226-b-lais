// referencia: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators

let valor1 = 5;
let valor2 = 3;
let valor3 = 1;
let valor4 = 3;
let valor5 = "Senha";
let valor6 = "senha";
let valor7 = "";
let valor8 = "5";

let maior = valor1 > valor2;
let menor = valor1 < valor2;
let maiorIgual = valor2 >= valor4;
let menorIgual = valor2 <= valor4;

console.log("<, >, >-, <=");
console.log(`${valor1} > ${valor2} -> ${maior}`);
console.log(`${valor1} < ${valor2} -> ${menor}`);
console.log(`${valor1} >= ${valor2} -> ${maiorIgual}`);
console.log(`${valor1} >= ${valor2} -> ${menorIgual}`);
console.log("");

console.log("==, ===, !=, !==");
let igual = valor5 == valor6;
let igualMesmo = valor5 === valor6;
let diferente = valor5 != valor6;
let diferenteMesmo = valor5 !== valor6;
let igual2 = valor1 == valor8;
let igualMesmo2 = valor1 === valor8;
let diferente2 = valor1 != valor8;
let diferenteMesmo2 = valor1 !== valor8;

console.log(`${valor5} == ${valor6} -> ${igual}`);
console.log(`${valor5} === ${valor6} -> ${igualMesmo}`);
console.log(`${valor5} != ${valor6} -> ${diferente}`);
console.log(`${valor5} !== ${valor6} -> ${diferenteMesmo}`);
console.log(`${valor1} == ${valor8} -> ${igual2}`);
console.log(`${valor1} === ${valor8} -> ${igualMesmo2}`);
console.log(`${valor1} != ${valor8} -> ${diferente2}`);
console.log(`${valor1} !== ${valor8} -> ${diferenteMesmo2}`);
console.log("");

console.log("NOT");
let acessoPermitido = true;
let acessoVerificado = !acessoPermitido;

console.log(`Valor acesso permitido: ${acessoPermitido}`);
console.log(`Valor acesso verificado: ${acessoVerificado}`);
