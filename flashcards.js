const flashcards = [
    { term: "Hjärta", definition: "Pumpar blod genom kroppen." },
    { term: "Lungor", definition: "Ansvarar för gasutbyte i kroppen." },
    { term: "Aorta", definition: "Det största blodkärlet i kroppen." }
];

let currentCard = 0;
let showingDefinition = false;

document.addEventListener("DOMContentLoaded", function () {
    updateFlashcard();
});

function updateFlashcard() {
    const flashcardElement = document.querySelector(".flashcard");
    flashcardElement.textContent = flashcards[currentCard].term;
}

function flipCard() {
    const flashcardElement = document.querySelector(".flashcard");
    if (showingDefinition) {
        flashcardElement.textContent = flashcards[currentCard].term;
    } else {
        flashcardElement.textContent = flashcards[currentCard].definition;
    }
    showingDefinition = !showingDefinition;
}

function nextCard() {
    currentCard = (currentCard + 1) % flashcards.length;
    showingDefinition = false;
    updateFlashcard();
}
