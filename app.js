let counter = 0;
let firstSelection = "";
let secondSelection = "";

const cards = document.querySelectorAll(".card");
console.log(cards)
cards.forEach((card) => {
  card.addEventListener("click", () => {
    console.log("clicked")
    card.classList.add("clicked");

    console.log(card.classList)
    console.log(card)
    if (counter === 0) {
      firstSelection = card.getAttribute("planet");
      counter++;
    } else {
      secondSelection = card.getAttribute("planet");
      counter = 0;

      if (firstSelection === secondSelection) {
        const correctCards = document.querySelectorAll(
          ".card[planet='" + firstSelection + "']"
        );

        correctCards[0].classList.add("checked");
        correctCards[0].classList.remove("clicked");
        correctCards[1].classList.add("checked");
        correctCards[1].classList.remove("clicked");
      } else {
        const incorrectCards = document.querySelectorAll(".card.clicked");

        incorrectCards[0].classList.add("shake");
        incorrectCards[1].classList.add("shake");

        setTimeout(() => {
          incorrectCards[0].classList.remove("shake");
          incorrectCards[0].classList.remove("clicked");
          incorrectCards[1].classList.remove("shake");
          incorrectCards[1].classList.remove("clicked");
        }, 800);
      }
    }
  });
});

function countDown() {
    let seconds = 100;
    const countdown = setInterval(function() {
        document.getElementById('remaining-time').innerHTML = seconds;
        seconds--;
  
        if (seconds < 0) {
            clearInterval(countdown);
            document.getElementById('countdown').innerHTML = "Countdown stopped";
        }
    }, 100000); 
  }
  
  countDown(); 
  
  
  const startButton = document.getElementById('start-button');
  const timerElement = document.getElementById('remaining-time');
  
  let remainingTime = 100; 
  let timerInterval; 
  
  function startTimer() {
      timerElement.textContent = remainingTime;
      timerInterval = setInterval(function() {
          remainingTime--;
          timerElement.textContent = remainingTime;
  
          if (remainingTime === 0) {
              clearInterval(timerInterval);
            }
      }, 1000); 
  }

  startButton.addEventListener('click', function() {
    startButton.disabled = true;
    startTimer();
});

function checkWin() {
    const allCards = document.querySelectorAll(".card");
    const matchedCards = document.querySelectorAll(".card.checked")

    if (allCards.length === matchedCards.length) {
        showWinPopup();
    }
}

function showWinPopup() {
    const winPopup = document.getElementById("win-popup");
    winPopup.style.display = "flex";
}

function showWinPopup() {
    const winPopup = document.getElementById("win-popup")
    winPopup.style.display = 
}