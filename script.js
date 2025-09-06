alert("Olá!"); // Exibe uma janela de alerta

console.log("Mensagem no console"); // Mostra texto no console do navegador

document.getElementById("meuId"); // Seleciona elemento pelo ID

document.querySelector(".minhaClasse"); // Seleciona elemento pela classe

document.querySelector("button").addEventListener("click", () => {
  alert("Botão clicado!");
}); // Adiciona evento de clique ao botão

let nome = "João"; // Declara variável com valor de texto

const idade = 25; // Declara constante com valor numérico

if (idade >= 18) {
  console.log("Maior de idade");
} // Condicional: verifica se idade é maior ou igual a 18

for (let i = 0; i < 5; i++) {
  console.log("Número: " + i);
} // Laço que repete 5 vezes

function saudacao(nome) {
  return "Olá, " + nome;
} // Função que retorna uma saudação

setTimeout(() => {
  console.log("Executado após 2 segundos");
}, 2000); // Executa código após 2 segundos

document.body.style.backgroundColor = "lightblue"; // Muda cor de fundo da página

