'use strict';
const Player0 = document.querySelector('.player--0');
const Player1 = document.querySelector('.player--1');
const DiceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const Curr0 = document.getElementById('current--0');
const Curr1 = document.getElementById('current--1');
const Scr0 = document.getElementById('score--0');
const Scr1 = document.getElementById('score--1');

//start

let score, CurrantScr, ActivePlayer, playing;
const init = function () {
  DiceEL.classList.add('hidden');
  Scr0.textContent = 0;
  Scr1.textContent = 0;

  score = [0, 0];
  CurrantScr = 0;
  ActivePlayer = 0;
  playing = true;
  Scr0.textContent = 0;
  Scr1.textContent = 0;
  Curr0.textContent = 0;
  Curr1.textContent = 0;
  Player0.classList.remove('player--winner');
  Player1.classList.remove('player--winner');
  Player0.classList.add('player--active');
  Player1.classList.remove('player--active');
};

init();

const swithPlayer = function () {
  document.getElementById(`current--${ActivePlayer}`).textContent = 0;
  ActivePlayer = ActivePlayer === 0 ? 1 : 0;
  CurrantScr = 0;
  Player0.classList.toggle('player--active');
  Player1.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  DiceEL.classList.remove('hidden');
  DiceEL.src = `dice-${dice}.png`;
  if (dice !== 1) {
    CurrantScr += dice;
    document.getElementById(`current--${ActivePlayer}`).textContent =
      CurrantScr;
  } else {
    swithPlayer();
  }
});

btnHold.addEventListener('click', function () {
  score[ActivePlayer] += CurrantScr;
  document.getElementById(`score--${ActivePlayer}`).textContent =
    score[ActivePlayer];

  //check score = 10
  if (score[ActivePlayer] >= 50) {
    document
      .querySelector(`.player--${ActivePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${ActivePlayer}`)
      .classList.remove('player--active');
  } else {
    swithPlayer();
  }
});

btnNew.addEventListener('click', init);
