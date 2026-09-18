let entrada = require('prompt-sync')();  

let usuario = 'klofis';
let senha = '1475369'; 

console.log('Insira seus dados para acessar o sistema!');

let loginUsuario = entrada('Nome de usuário: '); 
let loginSenha = entrada('Senha: ');  

if (usuario == loginUsuario.toLowerCase() && senha == loginSenha) {
    console.log('Acesso permitido!');           
} else {
    console.log('Acesso negado!');
}

entrada('Pressione enter para finalizar o programa!');