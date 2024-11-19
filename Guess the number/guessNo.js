const random = parseInt(Math.random() * 100 +1);

const submit = document.querySelector('#subt');
const input = document.querySelector('#guessField');
const previous = document.querySelector('.guesses');
const lowOrHi = document.querySelector('.lowOrHi');
const remaining = document.querySelector('.lastResult');
const startOver = document.querySelector('.resultParas');

let playGame = true;
let preGuess = [];
let numGuess = 0;
 let p = document.createElement('p');

 if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(input.value);
        console.log(guess); 
         validateGuess(guess);
    })
 }

function validateGuess(guess){
    if(isNaN(guess)){
        alert(`Please enter valid number.`)
    }else if (guess >100 || guess <1){
        alert(`Enter number within 1 to 100`)
    }
    else{
        preGuess.push(guess);
        if(numGuess === 11){
            cleanup(guess);
            display(`Game over. Random number was ${random}`);
            endGame();
        }
       else{
        cleanup(guess);
        checkGuess(guess);
       }
    }
}

function checkGuess(guess){
    if( guess === random){
        display(`Your guess is right`);
        endGame();
    }else if(guess > random){
        display(`Your guess is too high.`);
    }else if(guess < random){
        display(`Your guess is too low.`);
    }
}

function cleanup(guess){
    input.value = ''
    previous.innerHTML += `${guess},`;
    numGuess ++;
    remaining.innerHTML = `${11-numGuess}`;
}

function display(message){
    lowOrHi.innerHTML = `${message}`;
}

function endGame(){
    input.value = ''
    input.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start a new Game</h2>`;
    startOver.appendChild(p);
    playGame= false
    startGame();
}

function startGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      random = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 1;
      previous.innerHTML = '';
      remaining.innerHTML = `${11 - numGuess} `;
      input.removeAttribute('disabled');
      startOver.removeChild(p);
  
      playGame = true;
    });
  }
