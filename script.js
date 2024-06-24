// Variáveis para elementos do DOM
let countdown; // Contador regressivo
let resultElement = document.getElementById("result"); // Elemento que exibe o resultado
let countdownElement = document.getElementById("countdown"); // Elemento que exibe a contagem regressiva
let buttonElement = document.getElementById("drawButton"); // Botão de início do sorteio
let containerELement = document.getElementById("container"); // Container principal
let textElement = document.getElementById("textdown"); // Elemento que exibe o texto do resultado
let atualizationElement = document.getElementById("pageatualization"); // Botão de atualização da página
let loadingElement = document.getElementById("loading"); // Elemento de carregamento
let textInitElement = document.getElementById("initcountdown"); // Elemento de inicialização

// Função para iniciar o sorteio
function startDraw() {
  // Reinicia o resultado, a contagem regressiva
  resultElement.textContent = "";
  clearInterval(countdown);
  countdownElement.style.display = "block";
  containerELement.style.display = "block";
  textInitElement.style.display = "none";
  buttonElement.style.display = "none";

  // Inicia a contagem regressiva
  let seconds = 5; // 5 segundos de contagem regressiva
  countdownElement.textContent = ` ${seconds}`;
  countdown = setInterval(() => {
    seconds--;
    countdownElement.textContent = ` ${seconds}`;

    // Quando a contagem regressiva atinge zero, chama a função drawNumber
    if (seconds === 0) {
      clearInterval(countdown);
      drawNumber();
    }
  }, 1000);
  console.log("Botão Começar Ativado \n", startDraw)
}

// Função para realizar o sorteio
function drawNumber() {
  // Gera um número aleatório de 1 a 1000
  const randomNumber = Math.floor(Math.random() * 200) + 1;

  // Exibe o resultado
  textElement.style.display = "block";
  countdownElement.style.display = "none";
  loadingElement.style.display = "block";


  console.log("Sorteador de números acionado \n", drawNumber )

  // Aguarda 3 segundos antes de exibir o resultado
  setTimeout(() => {
    loadingElement.style.display = "none";
    resultElement.textContent = `${randomNumber}`;
    resultElement.style.animation = "scaleAnimation 1s ease";
  }, 3000);

  // Aguarda mais 2 segundos antes de animar o botão de atualização da página
  setTimeout(() => {
    atualizationElement.style.transform = "translatey(-25px)";
    atualizationElement.style.opacity = "1";
  }, 5000);
  
}

// Função para atualizar a página
function atualizarPagina() {
  // Use location.reload() para recarregar a página
  location.reload();
  console.log("Botão de atualizar página \n", atualizarPagina)
}
