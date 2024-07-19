import { config } from "./config.js";

export function createRandomNumber() {
  config.randomNumber = parseInt(Math.random() * config.maxValue + 1);
}
