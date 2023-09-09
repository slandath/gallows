const answerContainer = document.querySelector('#answerContainer');
const keyboardContainer = document.querySelector('#keyboardContainer');
const alert = document.querySelector('#alert');

const keyboard = [
  'q',
  'w',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
];

const wordBank = [
  'pencil',
  'letter',
  'coffee',
  'window',
  'guitar',
  'robot',
  'library',
  'office',
  'country',
  'flower',
  'street',
  'number',
  'picture',
  'garden',
  'animal',
  'music',
  'teacher',
  'doctor',
  'firefighter',
  'police officer',
  'cook',
  'farmer',
  'engineer',
  'scientist',
  'birthday',
  'computer',
  'envelope',
  'guitarist',
  'happiness',
  'introduce',
  'newspaper',
  'opposite',
  'president',
  'sentence',
  'telephone',
  'unfortunately',
  'weekend',
];

let guessCounter = 0;
let correctLetterCounter = 0;

const answer = [];
const answerLetters = [];
const answerSpaces = [];
const keys = [];

document.addEventListener('keydown', (e) => {
  keys.forEach((item) => {
    if (item.id === e.key) {
      item.click();
    }
  });
});

function createKeyboard() {
  keyboard.forEach((key) => {
    const cap = document.createElement('button');
    cap.type = 'button';
    cap.innerText = key;
    cap.id = key;
    cap.className = 'keyboard-container-button';
    cap.addEventListener('click', checkLetter);
    keyboardContainer.appendChild(cap);
    keys.push(cap);
  });
}

function createAnswerSpaces() {
  answerLetters.forEach((letter) => {
    const space = document.createElement('p');
    space.className = 'answer-space';
    answerContainer.appendChild(space);
    answerSpaces.push(space);
  });
}

function selectAnswer() {
  const randomIndex = Math.floor(Math.random() * wordBank.length);
  answer.push(wordBank[randomIndex]);
  for (const word of answer) {
    for (const letter of word) {
      answerLetters.push(letter);
    }
  }
}

function checkLetter(e) {
  const { target } = e;
  switch (answerLetters.includes(target.id)) {
    case true:
      target.className = 'key-correct';
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < answerLetters.length; i++) {
        if (target.id === answerLetters[i]) {
          answerSpaces[i].innerText = target.id;
          correctLetterCounter += 1;
        }
      }
      break;
    case false:
      target.className = 'key-wrong';
      guessCounter += 1;
      break;
    default:
  }

  gameState();
}

function gameState() {
  if (correctLetterCounter === answerLetters.length) {
    document.querySelector('#bannerContainer').className =
      'banner-container-winner';
    alert.innerText = 'Winner!';
  }

  switch (guessCounter) {
    case 1:
      document
        .querySelector('.head')
        .setAttribute('style', 'visibility: visible');
      break;
    case 2:
      document
        .querySelector('.torso')
        .setAttribute('style', 'visibility: visible');
      break;
    case 3:
      document
        .querySelector('.l-arm')
        .setAttribute('style', 'visibility: visible');
      break;
    case 4:
      document
        .querySelector('.r-arm')
        .setAttribute('style', 'visibility: visible');
      break;
    case 5:
      document
        .querySelector('.l-leg')
        .setAttribute('style', 'visibility: visible');
      break;
    case 6:
      document
        .querySelector('.r-leg')
        .setAttribute('style', 'visibility: visible');
      document.querySelector('#bannerContainer').className =
        'banner-container-loser';
      alert.innerText = 'Game Over!';
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < answerLetters.length; i++) {
        answerSpaces[i].innerText = answerLetters[i];
      }
      break;
    default:
  }
}

function setup() {
  createKeyboard();
  selectAnswer();
  createAnswerSpaces();
}

setup();
