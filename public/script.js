const startScreen = document.querySelector(".startScreen");
const startButton = document.getElementById("startButton");
const quizScreen = document.querySelector(".quizScreen");
const questionContainer = document.querySelector(".questionContainer");
const questionsQtd = document.querySelector(".questionsQtd");
const questionElement = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const finishContainer = document.querySelector(".finish");
const textFinish = document.querySelector(".finish span");
const restartButton = document.querySelector(".finish button");
const tryAgainScreen = document.querySelector(".tryAgainScreen");
const textTryAgainScreen = document.querySelector(".tryAgainScreen span");
const tryAgainButton = document.querySelector(".tryAgainScreen button");

import questions from "./questions.js"; 

// Inicializa variáveis para controle do estado do quiz

let currentIndex = 0;
let questionsCorrect = 0;
let userName;

// verifica se uma string está vazia ou é numérica

function isStringEmpty(str) {
    return str.trim().length === 0 || !isNaN(str);
  }

  // Obtém um nome de usuário válido
function getValidUserName() {
  do {
    userName = prompt("Bem vindo! Digite aqui o seu nome para começar!");

    if (userName === null) {
      showStartScreen();
    }

    if (isStringEmpty(userName)) {
      alert("Você precisa digitar um nome válido para iniciar");
      showStartScreen();
    }
  } while (isStringEmpty(userName));

  return userName;
}

function showStartScreen() {
  startScreen.style.display = "flex";
  quizScreen.style.display = "none";
  tryAgainScreen.style.display = "none";
}

function showQuizScreen() {
  startScreen.style.display = "none";
  quizScreen.style.display = "flex";
  tryAgainScreen.style.display = "none";
}

function showTryAgainScreen() {
  quizScreen.style.display = "none";
  tryAgainScreen.style.display = "flex";
}

function showFinishScreen() {
  questionContainer.style.display = "none";
  finishContainer.style.display = "flex";
}
 