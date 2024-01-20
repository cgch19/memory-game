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
