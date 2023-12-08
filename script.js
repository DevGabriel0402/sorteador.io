let countdown;
let resultElement = document.getElementById("result");
let countdownElement = document.getElementById("countdown");
let buttonElement = document.getElementById("drawButton");
let containerELement = document.getElementById("container");
let textElement = document.getElementById("textdown");
let atualizationElement = document.getElementById("pageatualization");



function startDraw() {
  // Reinicia o resultado, a contagem regressiva
  resultElement.textContent = "";
  clearInterval(countdown);
  countdownElement.style.display = "block";
  containerELement.style.display="block";
  buttonElement.style.display = "none";

  // Inicia a contagem regressiva
  let seconds = 5; // 5 segundos de contagem regressiva
  countdownElement.textContent = ` ${seconds}`;
  countdown = setInterval(() => {
    seconds--;
    countdownElement.textContent = ` ${seconds}`;

    if (seconds === 0) {
      clearInterval(countdown);
      drawNumber();
    }
  }, 1000);
}

function drawNumber() {
  // Gera um número aleatório de 1 a 1000
  const randomNumber = Math.floor(Math.random() * 1000) + 1;

  // Exibe o resultado
  textElement.style.display = "block";
  resultElement.textContent = `${randomNumber}`;
  countdownElement.style.display = "none";
  setTimeout(() => {

    atualizationElement.style.opacity = "1";


  },3000)


 
 
}
function atualizarPagina() {
    // Use location.reload() para recarregar a página
    location.reload();
}


