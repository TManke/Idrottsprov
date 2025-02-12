const flashcards = [
    { term: "Fysisk hälsa", definition: "Att kroppen mår bra och vi känner oss friska." },
    { term: "Psykisk hälsa", definition: "Hur vi mår inuti, att vi känner oss glada och kan hantera stress." },
    { term: "Social hälsa", definition: "Att vi har bra relationer och känner en gemenskap." }
];

let currentCard = 0;
let showingDefinition = false;

function showDefinition() {
    const termElement = document.getElementById("term");
    if (!showingDefinition) {
        termElement.innerText = flashcards[currentCard].definition;
        showingDefinition = true;
    } else {
        termElement.innerText = flashcards[currentCard].term;
        showingDefinition = false;
    }
}

function nextCard() {
    currentCard = (currentCard + 1) % flashcards.length;
    document.getElementById("term").innerText = flashcards[currentCard].term;
}
