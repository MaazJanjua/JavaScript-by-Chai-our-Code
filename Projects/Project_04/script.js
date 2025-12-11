let randomNum = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);

        validateGuess(guess)
    })
}

function validateGuess(guess) {
    //
    if (isNaN(guess)) {
        alert('plese enter a valid number')
    } else if (guess < 1) {
        alert('plese enter a number which is greater then 1')

    } else if (guess > 100) {

        alert('plese enter a  number which is less then 100')
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            cleanupGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNum}`)
            endGame()

        } else {
            cleanupGuess(guess)
            checkGuess(guess)
        }

    }
}
function checkGuess(guess) {
    if (guess === randomNum) {
        displayMessage(`you guessed the right number`)
        endGame()
    } else if (guess < randomNum) {
        displayMessage(`number is tooo low`)
    }
    else if (guess > randomNum) {
        displayMessage(`number is tooo high`)
    }
}
function cleanupGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    // remaining.innerHTML = `${11 - numGuess}`
    remaining.innerHTML = `${10 - (numGuess - 1)}`

}
function displayMessage(message) {
    //Direct Intrect With DOM
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function endGame() {
    // 
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game </h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}
function newGame() {
    //
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNum = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1;
        guessSlot.innerHTML = ''
        // remaining.innerHTML = `${11 - numGuess}`
        remaining.innerHTML = `${10 - (numGuess - 1)}`
        // remaining.innerHTML = `${10 - prevGuess.length}`


        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
        // playGame()
    })
}
