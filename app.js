let counter = 0;
let firstSelection = "";
let secondSelection = "";
let flippedCards = 0;
let isGameStarted = false;
let remainingTime = 100;
let flipCount = 0;
let timer;

const cards = document.querySelectorAll(".cards .card")
const startButton = document.getElementById("start-button")
const remainingTimeElement = document.getElementById("remaining-time")
const flipCountElement = document.getElementById("flip")

startButton.addEventListener("click", startGame)

cards.forEach((card)=> {
    card.addEventListener("click", () => {
        if (isGameStarted) {
            flipCard(card)
        }
    })
})

function startGame() {
    isGameStarted = true
    startButton.disabled = 
}