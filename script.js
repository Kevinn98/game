'use strict';
// set everything here
let rightAns = Math.floor(Math.random() * 20 + 1);
let score = document.querySelector('.score');
const message = document.querySelector('.message');
let counter = 20;
let previousHighScore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
const displayText = text => {
  document.querySelector('.h1').textContent = text;
};
console.log(`this is the ans ${rightAns}`);

// check function to guess the number
document.querySelector('.check').addEventListener('click', () => {
  let answer = document.querySelector('.guess').value;
  Number(answer);

  if (!answer) {
    // message.textContent = 'please put yours lucky number! 😡';
    displayMessage('please put yours lucky number! 😡');
  }
  // when the player win
  else if (answer == rightAns) {
    document.body.style.backgroundColor = 'green';
    document.querySelector('.number').textContent = rightAns;
    // document.querySelector('.h1').textContent = `you're awesome 🙌`;
    displayText(`you're awesome 🙌`);
    if (counter > previousHighScore) {
      document.querySelector('.highscore').textContent = counter;
      previousHighScore = counter;
      document.querySelector('.highscore').textContent = previousHighScore;

      // bug here
      // document.querySelector('.h1').textContent = `you so Cool! 👏`;
      displayText(`you so Cool! 👏`);
    }
  }

  // refactoring code
  else if (answer !== rightAns) {
    if (counter > 0) {
      message.textContent =
        answer > rightAns
          ? 'The number was toooo high! 🤣👌'
          : 'The number was toooo low! 🤷‍♀️😭';
      counter--;
      score.textContent = counter;
    } else {
      document.body.style.backgroundColor = '#990F02';
      message.textContent = `You lost the game! 👻💥`;
      score.textContent = 0;
      // document.querySelector('.h1').textContent = `better luck next time 🤞`;
      displayText(`better luck next time 🤞`);
    }
  }

  // when guess is too high
  // else if (answer > rightAns) {
  //   if (counter > 0) {
  //     message.textContent = 'The number was toooo high! 🤣👌';
  //     counter--;
  //     score.textContent = counter;
  //   } else {
  //     document.body.style.backgroundColor = '#990F02';
  //     message.textContent = `You lost the game! 👻💥`;
  //     score.textContent = 0;
  //     document.querySelector('.h1').textContent = `better luck next time 🤞`;
  //   }
  // }
  // when guess is too high`
  // else if (answer < rightAns) {
  //   if (counter > 0) {
  //     message.textContent = 'The number was toooo low! 🤷‍♀️😭';
  //     counter--;
  //     score.textContent = counter;
  //   } else {
  //     document.body.style.backgroundColor = '#990F02';
  //     message.textContent = `You lost the game! 👻💥`;
  //     score.textContent = 0;
  //     document.querySelector('.h1').textContent = `better luck next time 🤞`;
  //   }
  // }
  // clear the last answer from game before and set new context in the game
  document.querySelector('.again').addEventListener('click', () => {
    counter = 20;
    score.textContent = counter;
    document.body.style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    rightAns = Math.floor(Math.random() * 20 + 1);
    document.querySelector('.number').textContent = '?';
    message.textContent = `try harder this time! 😜`;
    // document.querySelector('.h1').textContent = `Let's try again 👀`;
    displayText(`Let's try again 👀`);
  });
});

// clear the input box when user click on the box
document.querySelector('.guess').addEventListener('click', () => {
  document.querySelector('.guess').value = '';
});
