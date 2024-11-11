const result = document.querySelector(".result")
const hScore = document.querySelector("#humScore")
const mScore = document.querySelector("#macScore")

let hPoint = 0
let mPoint = 0

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log(human, machine)

    if (human === machine) {
        result.innerHTML = "TIED :/"
    }
    else if (
        human === 'paper' && machine === 'rock' ||
        human === 'rock' && machine === 'scissors' ||
        human === 'scissors' && machine === "paper") {
        hPoint++
        humScore.innerHTML = hPoint
        result.innerHTML = "YOU WIN !!! :D"
    } else {
        mPoint++
        macScore.innerHTML = mPoint
        result.innerHTML = "YOU LOOSE :("
    }

}
