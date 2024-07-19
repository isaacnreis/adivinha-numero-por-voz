import { config } from "./config.js";

const elementAttempt = document.getElementById("attempt");

export function checkIfAttemptIsValid(attempt) {
  const numberAttempt = +attempt;

  if (Number.isNaN(numberAttempt)) {
    if (attempt.toUpperCase() === "GAME OVER") {
      document.body.innerHTML = `
        <h2>Game Over!!!</h2>
        <h3>Pressione o botão para jogar novamente</h3>
        <h3>O número sorteado era ${config.randomNumber} :(</h3>
        <button id="playAgain" class="btn-jogar">Jogar novamente</button>
      `;
    } else {
      elementAttempt.innerHTML += "<div>Valor inválido</div>";
    }
    return;
  }

  if (numberAttempt > config.maxValue || numberAttempt < config.minValue) {
    elementAttempt.innerHTML += `
      <div>Valor inválido: Fale um número entre ${config.minValue} e ${config.maxValue}</div>
    `;
    return;
  }

  if (numberAttempt === config.randomNumber) {
    document.body.innerHTML = `
        <h2>Você acertou! <i class="fa-solid fa-wand-magic-sparkles"></i></h2>
        <h3>O número sorteado era ${config.randomNumber}</h3>

        <button id="playAgain" class="btn-jogar">Jogar novamente</button>
    `;
  } else if (numberAttempt > config.randomNumber) {
    elementAttempt.innerHTML += `
      <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
    `;
  } else {
    elementAttempt.innerHTML += `
      <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
    `;
  }
}

document.body.addEventListener("click", (e) => {
  if (e.target.id === "playAgain") {
    window.location.reload();
  }
});
