const allCards = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
    "9.png",
    "10.png"

];

let availableCards = [...allCards];
let usedCards = [];

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const resetBtn = document.getElementById("reset-btn");
const cardImage = document.getElementById("card-image");

startBtn.addEventListener("click", () => {
    if (availableCards.length > 0) {
        showRandomCard();
        startBtn.classList.add("hidden");
        nextBtn.classList.remove("hidden");
    }
});

nextBtn.addEventListener("click", () => {
    if (availableCards.length > 0) {
        showRandomCard();
    } else {
        cardImage.src = "cartas/Fondo inicio.jpg";
        cardImage.alt = "¡Fin del Bingo!";
        nextBtn.classList.add("hidden");
    }
});

resetBtn.addEventListener("click", () => {
    availableCards = [...allCards];
    usedCards = [];
    cardImage.src = "cartas/Fondo inicio.jpg";
    cardImage.alt = "Carta";
    startBtn.classList.remove("hidden");
    nextBtn.classList.add("hidden");
});

function showRandomCard() {
    const index = Math.floor(Math.random() * availableCards.length);
    const selected = availableCards.splice(index, 1)[0];
    usedCards.push(selected);
    animateCard(`cartas/${selected}`);
}

function animateCard(src) {
    cardImage.classList.remove("animate-in");
    void cardImage.offsetWidth; // Fuerza reflow para reiniciar animación
    cardImage.src = src;
    cardImage.onload = () => {
        cardImage.classList.add("animate-in");
    };
}

