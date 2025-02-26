const flashcards = [
    { term: "Cellandning", definition: "Druvsocker + syre → koldioxid + vatten + energi" },
    { term: "Huden", definition: "Kroppens största organ som skyddar mot smuts, bakterier och virus." },
    { term: "Pigment", definition: "Ämne i huden som skyddar mot solens strålar och ger hud och hår färg." },
    { term: "Överhuden", definition: "Det yttersta lagret av huden där hårstrån och porer finns." },
    { term: "Läderhuden", definition: "Mellanlagret av huden där hårsäckar, talgkörtlar och känselkroppar finns." },
    { term: "Underhuden", definition: "Hudens innersta lager där fett lagras och skyddar mot kyla." },
    { term: "Skelettets funktion", definition: "Ger stöd åt kroppen och skyddar inre organ som hjärta och lungor." },
    { term: "Benmärg", definition: "Finns inuti skelettbenen och producerar blodceller." },
    { term: "Kulled", definition: "En led som kan röra sig i alla riktningar, exempelvis axelleden." },
    { term: "Gångjärnsled", definition: "En led som bara kan böjas åt ett håll, exempelvis knäleden." },
    { term: "Skelettmuskler", definition: "Muskler du kan styra med viljan, exempelvis biceps och triceps." },
    { term: "Hjärtmuskeln", definition: "Muskeln som pumpar blod i kroppen och arbetar automatiskt." },
    { term: "Blodomloppet", definition: "Systemet där blod transporterar syre och näring i kroppen." },
    { term: "Röda blodkroppar", definition: "Transporterar syre från lungorna till kroppens celler." },
    { term: "Vita blodkroppar", definition: "Bekämpar bakterier och virus i kroppen." },
    { term: "Blodplättar", definition: "Hjälper blodet att koagulera och läka sår." },
    { term: "Artärer", definition: "Blodkärl som transporterar syrerikt blod från hjärtat." },
    { term: "Vener", definition: "Blodkärl som transporterar syrefattigt blod tillbaka till hjärtat." },
    { term: "Kapillärer", definition: "De minsta blodkärlen där syre och näring överförs till cellerna." },
    { term: "Puls", definition: "Antalet hjärtslag per minut, ökar vid fysisk aktivitet." },
    { term: "Immunsystem", definition: "Skyddar kroppen mot sjukdomar genom vita blodkroppar." },
    { term: "Antibiotika", definition: "Mediciner som dödar bakterier men inte virus." },
    { term: "Vaccin", definition: "Tränar immunsystemet att känna igen och bekämpa virus." },
    { term: "Puberteten", definition: "Period när kroppen förändras från barn till vuxen." },
    { term: "Målbrottet", definition: "Förändring av pojkars röst under puberteten när struphuvudet växer." },
    { term: "Akne", definition: "Inflammerade talgkörtlar som kan uppstå under puberteten." },
    { term: "Könsmogen", definition: "När kroppen kan få barn, sker under puberteten." }
];


// Funktion för att slumpa korten vid start
function shuffleFlashcards() {
    for (let i = flashcards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [flashcards[i], flashcards[j]] = [flashcards[j], flashcards[i]];
    }
}

let currentCard = 0;
let showingDefinition = false;

document.addEventListener("DOMContentLoaded", function () {
    shuffleFlashcards(); // Slumpa korten vid start
    updateFlashcard();
});

function updateFlashcard() {
    const flashcardElement = document.getElementById("flashcard");
    flashcardElement.textContent = flashcards[currentCard].term;
}

function flipCard() {
    const flashcardElement = document.getElementById("flashcard");
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
