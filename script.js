'use strict';
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const score = document.querySelectorAll('.score');
const currentScore = document.querySelectorAll('.current-score');
const dicePng = document.querySelector('.dice');
const activePlayer = document.querySelector('.player--active');
const current player = document.querySelectorAll('.player');
let scorePlayer1 = document.querySelector('.player--active').children[1];
const activeScore = document.querySelector('.player--active').children[2]
  .children[1];

const randomNumber = function () {
  const luckyNumber = Math.floor(Math.random() * 6) + 1;
  dicePng.classList.remove('hidden');
  //activeScore.textContent = `${luckyNumber}`;
  let x = luckyNumber;
  let y = Number(activeScore.textContent);
  if (luckyNumber !== 1) activeScore.textContent = `${y + x}`;
  /* for (let i = 0; i < x; i++) {
    if (luckyNumber !== 1) {
    }
  }
  if (activeScore.textContent === '0') {
  } else {
  }
  console.log(`numerosumado = a luckynumber ${numeroSumado}`);
  numeroSumado = numeroSumado + luckyNumber;
  console.log(`numerosumado + luckynumber = ${numeroSumado}`); */
  dicePng.src = `dice-${luckyNumber}.png`;
  console.log(luckyNumber);
  /* if (luckyNumber !== 1) {
    for (i = 1; i > luckyNumber; i++) {
      let x = 
    }
  } */
  return luckyNumber;
};

const resetGame = () => {
  for (let i = 0; i < score.length; i++) {
    score[i].textContent = '0';
    currentScore[i].textContent = '0';
  }
  dicePng.classList.add('hidden');
  for (let i = 0; i < currentPlayer.length; i++) {

}

  //document.querySelector('#score--1').textContent = '0';
  //document.querySelector('#score--0').textContent = '0';
};

const freezePlayer = function () {
  let w = Number(activeScore.textContent);
  console.log(w);
  scorePlayer1.textContent = `${w}`;
};

btnNewGame.addEventListener('click', resetGame);
btnRollDice.addEventListener('click', randomNumber);
btnHold.addEventListener('click', freezePlayer);

/* Mientras luckyNumber no sea igual a 1, continuar a sumar los numeros
let diceRoll = Math.floor(Math.random() * 6) + 1;

while (diceRoll !== 6) {
  console.log(`This is not 6, this is: ${diceRoll}`);
  diceRoll = Math.floor(Math.random() * 6) + 1;
  if (diceRoll === 6) console.log(`This is a ${diceRoll}`);
} */
