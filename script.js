'use strict';
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const score = document.querySelectorAll('.score');
const currentScore = document.querySelectorAll('.current-score');
const dicePng = document.querySelector('.dice');
const activePlayer = document.querySelector('.player--active');
const activeScore = document.querySelector('.player--active').children[2]
  .children[1];

const randomNumber = function () {
  const luckyNumber = Math.floor(Math.random() * 6) + 1;
  if (activeScore.textContent === '0') {
    activeScore.textContent = `${luckyNumber}`;
  } else {
  }
  /* console.log(`numerosumado = a luckynumber ${numeroSumado}`);
  numeroSumado = numeroSumado + luckyNumber;
  console.log(`numerosumado + luckynumber = ${numeroSumado}`); */
  dicePng.src = `dice-${luckyNumber}.png`;
  console.log(luckyNumber);
  if (luckyNumber === 1) {
    activePlayer.children.textContent = '0';
    freezePlayer;
  }
  return luckyNumber;
};

const resetGame = () => {
  for (let i = 0; i < score.length; i++) {
    score[i].textContent = '0';
    currentScore[i].textContent = '0';
  }
  //document.querySelector('#score--1').textContent = '0';
  //document.querySelector('#score--0').textContent = '0';
};

const freezePlayer = function () {
  active;
};

btnNewGame.addEventListener('click', resetGame);
btnRollDice.addEventListener('click', randomNumber);
btnHold.addEventListener('click', freezePlayer);
