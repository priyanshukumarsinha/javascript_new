# Projects on DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## Solution Code

### Project 1

```javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    body.style.backgroundColor = e.target.id;
  });
});

```

### Project 2

```javascript

const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height == '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please Give a Valid Height!';
  } else if (weight == '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please Give a Valid Weight!';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span> ${bmi} </span>, 
                            You are ${bmi>24.9?"Over Weight":
                            (bmi>18.6? "Normal": "Under Weight")}`
  }
});


```

### Project 3

```javascript

const clock = document.querySelector('#clock');

setInterval(function(){
  const myTime = new Date();
  clock.innerHTML = myTime.toLocaleTimeString();
}, 1000)

```

### Project 4

```javascript

let randomNumber = Math.round(Math.random() * 100 + 1);
const form = document.querySelector('form');
let guessedNumber = document.querySelector('#guessField');
let allGuesses = document.querySelector('.guesses');
let guessRemaining = document.querySelector('.lastResult');
let result = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const guess = parseInt(guessedNumber.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (guess != '' && guess > 0 && guess <= 100 && !isNaN(guess)) {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over, Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  } else alert('Please Enter a Valid Number!!');
}

function checkGuess(guess) {
  if (guess > randomNumber) displayMessage('Number is Too High');
  else if (guess < randomNumber) displayMessage('Number is Too Low');
  else displayMessage('You Guessed it Right!!');
}

function displayGuess(guess) {
  guessedNumber.value = '';
  allGuesses.innerHTML += `${guess} `;
  numGuess++;
  guessRemaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  result.innerHTML = `<h2>${message}</h2>`;
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = Math.round(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    allGuesses.innerHTML = '';
    guessRemaining.innerHTML = `10`;
    guessedNumber.removeAttribute('disabled');
    startOver.removeChild(p);
    displayMessage('');
    playGame = true;
  });
}

function endGame() {
  guessedNumber.value = '';
  guessedNumber.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame"> Start new Game </h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}


```