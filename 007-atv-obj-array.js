let entrada = require("prompt-sync")();

let produto = {
  nome: "Celular",
  preco: 1000.0,
  disponivel: false,
  tags: ["Samsung", "A22", "Câmera boa"],
};

console.log(produto);
console.log("Tipo da variável produto: " + typeof produto);
console.log("Tipo do array em tags: " + typeof produto.tags);

console.log();
console.log();
console.log("Ficha do produto");
// console.log('Nome do produto: ' + produto.nome);
console.log(`Nome do produto: ${produto.nome}`);
console.log(`Preço R$ ${produto.preco.toFixed(2)}`);
console.log(`Disponível: ${produto.disponivel === true ? "Sim" : "Não"}`);
console.log(`Tags:  ${produto.tags[0]} 
       ${produto.tags[1]} 
       ${produto.tags[2]}`);

entrada();
