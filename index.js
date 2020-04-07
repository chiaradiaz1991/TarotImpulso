

const tarotCards = document.querySelectorAll('.tarot-card');

let hasFlippedCard = false;
let lockBoard = false;
let card;

function flipTarotCard() {
  flipped = true;
  if (lockBoard) return;
  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    card = this;
  }

  hasFlippedCard= false;
  unflipCards();
  // checkCard();
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    card.classList.remove('flip');
    resetBoard();
    lockBoard = false;
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [card, secondCard] = [null];
}

function shuffle() {
  tarotCards.forEach(c => {
    let ramdomPos = Math.floor(Math.random() * 22);
    c.style.order = ramdomPos;
  });
}

tarotCards.forEach(c => c.addEventListener('click', flipTarotCard));

