alert("Olá!\nBem vinde ao 2º desafio finalizado do #7DaysOfCode de Lógica de Programação da Alura!");

var nome = prompt("Qual o seu nome?");
var idade = prompt("Quantos anos você tem?");
var linguagem = prompt("Qual linguagem de programação você está estudando?");

alert("Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagem + "!");

var resposta = prompt("Você gosta de estudar " + linguagem + "?\n\nDigite 1 para SIM ou 2 para NÃO.");

while (resposta != 1 && resposta != 2) {
    resposta = prompt("Você gosta de estudar " + linguagem + "?\n\nDigite 1 para SIM ou 2 para NÃO.");
}

if (resposta == 1) {
        alert("Muito bom! Continue estudando e você terá muito sucesso.");
    } else {
     alert("Ahh que pena... Já tentou aprender outras linguagens?");
    }