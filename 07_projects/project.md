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



```