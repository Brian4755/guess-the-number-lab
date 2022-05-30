const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
    (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    let guess
    while (guess !== this.secretNum) {
      this.prevGuesses.push(this.getGuess())
      if (guess < this.secretNum) {
        alert(`Your guess is too low Previous guesses: ${game.prevGuesses}`)
      }
      else if (guess > this.secretNum) {
        alert(`Your guess is too high Previous guesses: ${game.prevGuesses}`)
      }
    }
    return guess
    },

    getGuess() {
      let guess
      while (guess >= this.smallestNum && guess <= this.biggestNum) { 
        parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
      }
      return guess
    }
}

game.play()



// function Guess(num) {
//   return prevGuesses.push(num)
// }

// let guess = 0
// while (guess !== game.secretNum) {
// if (guess !== game.secretNum) {
//   Guess(guess)
//   alert(`Your past guesses are ${prevGuesses}`)
// }}

// alert(`Congratulations! You have correctly guessed the number ${game.secretNum}`)