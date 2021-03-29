'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const playerGet = document.querySelectorAll('.player');

//Iniciamos las variables para poder usarlas en el scope global
let scores, currentScore, activePlayer, playing;

const initGame = function () {
  // Reasignamos las variables en el scope local
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  // this variable controls is we are still playing (there is no winner)
  // playing true = no winner yet
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  //scores[(0, 0)];
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  document.getElementById(`name--0`).textContent = `PLAYER 0`;
  document.getElementById(`name--1`).textContent = `PLAYER 1`;
};

initGame();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  // Generate Random Number
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    // Display dice.
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // Check if rolled is 1: if true, switch to next player.
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      // Switch next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  // Add current score to active player's score
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document.getElementById(`name--${activePlayer}`).textContent =
        'HAI VINTO!';
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

//Here didn't create any function, instead the initGame is passed when 'click'
btnNew.addEventListener('click', initGame);
