import { config } from "./config.js";
import { displayAttempt } from "./voiceRecognition.js";

console.log("Número Secreto:", config.randomNumber);

const elementMinValue = document.getElementById("minValue");
elementMinValue.textContent = config.minValue;

const elementMaxValue = document.getElementById("maxValue");
elementMaxValue.textContent = config.maxValue;
