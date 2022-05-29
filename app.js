const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
    (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  }
}

prevGuesses = []

function Guess(num) {
  return prevGuesses.push(num)
}

let getGuess = 0
while (getGuess !== game.secretNum) {
  getGuess = parseInt(prompt(`Enter a guess between ${game.smallestNum} and ${game.biggestNum}`))
if (getGuess !== game.secretNum) {
  Guess(getGuess)
  alert(`Your past guesses are ${prevGuesses}`)
}}

alert(`Congratulations! You have correctly guessed the number ${game.secretNum}`)