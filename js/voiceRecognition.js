import { checkIfAttemptIsValid } from "./validations.js";

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const elementAttempt = document.getElementById("attempt");

const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(e) {
  const attempt = e.results[0][0].transcript;
  displayAttempt(attempt);
  checkIfAttemptIsValid(attempt);
}

export function displayAttempt(attempt) {
  elementAttempt.innerHTML = `
    <h4>Você disse:</h4>
    <span class="box">${attempt}</span>
  `;
}

recognition.addEventListener("end", () => recognition.start());
