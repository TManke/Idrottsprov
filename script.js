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
    shuffleQuestions(); // Slumpa quiz-frågorna vid start
    currentQuestionIndex = 0;
    updateFlashcard();
    showQuestion(currentQuestionIndex);
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

// Funktion för att starta om både quiz och flashcards
function restartAll() {
    shuffleFlashcards();
    currentCard = 0;
    showingDefinition = false;
    updateFlashcard();
    
    shuffleQuestions();
    currentQuestionIndex = 0;
    showQuestion(currentQuestionIndex);
}

// QUIZ FUNKTIONALITET
let questions = [
        { question: "Vad är hjärtats huvudsakliga funktion?", options: ["Att pumpa blod", "Att producera syre", "Att bryta ner mat"], answer: "Att pumpa blod" },
        { question: "Vilken del av kroppen ansvarar för syreutbyte?", options: ["Hjärtat", "Lungorna", "Levern"], answer: "Lungorna" },
        { question: "Vad heter det största blodkärlet i kroppen?", options: ["Vena cava", "Aortan", "Kapillärer"], answer: "Aortan" },
        { question: "Vilket organ filtrerar blodet?", options: ["Magsäcken", "Njurar", "Lungorna"], answer: "Njurar" },
        { question: "Vad kallas de minsta blodkärlen?", options: ["Artärer", "Vener", "Kapillärer"], answer: "Kapillärer" },
        { question: "Vilket organ producerar insulin?", options: ["Levern", "Bukspottkörteln", "Mjälten"], answer: "Bukspottkörteln" },
        { question: "Hur många ben har en människa?", options: ["206", "150", "300"], answer: "206" },
        { question: "Vilken blodkropp bekämpar infektioner?", options: ["Röda blodkroppar", "Vita blodkroppar", "Blodplättar"], answer: "Vita blodkroppar" },
        { question: "Vad gör blodplättar?", options: ["Transporterar syre", "Koagulerar blod", "Bryter ner fett"], answer: "Koagulerar blod" },
        { question: "Vilken muskel är störst i kroppen?", options: ["Biceps", "Gluteus maximus", "Hjärtmuskeln"], answer: "Gluteus maximus" },
        { question: "Vad heter kroppens minsta ben?", options: ["Stigbygeln", "Lårbenet", "Nyckelbenet"], answer: "Stigbygeln" },
        { question: "Hur många lungor har vi?", options: ["1", "2", "3"], answer: "2" },
        { question: "Hur många kammare har hjärtat?", options: ["2", "3", "4"], answer: "4" },
        { question: "Vilken del av hjärtat tar emot syrefattigt blod?", options: ["Höger förmak", "Vänster kammare", "Höger kammare"], answer: "Höger förmak" },
        { question: "Vad transporterar syre i blodet?", options: ["Hemoglobin", "Insulin", "Kollagen"], answer: "Hemoglobin" },
        { question: "Vilket organ bryter ner alkohol?", options: ["Njurar", "Levern", "Lungorna"], answer: "Levern" },
        { question: "Vad är huvudfunktionen för lungorna?", options: ["Filtrera blod", "Syresätta blodet", "Producera insulin"], answer: "Syresätta blodet" },
        { question: "Vilken gas andas vi in mest av?", options: ["Syre", "Kväve", "Koldioxid"], answer: "Kväve" },
        { question: "Vad gör lymfsystemet?", options: ["Transporterar lymfvätska och bekämpar infektioner", "Producerar hormoner", "Reglerar kroppstemperaturen"], answer: "Transporterar lymfvätska och bekämpar infektioner" },
        { question: "Vad gör njurarna?", options: ["Filtrerar blod", "Producerar insulin", "Hjälper till med matsmältning"], answer: "Filtrerar blod" },
        { question: "Hur många revben har en människa?", options: ["10", "12", "14"], answer: "12" },
        { question: "Vad kallas den största nerven i kroppen?", options: ["Synnerven", "Ischiasnerven", "Hjärnstammen"], answer: "Ischiasnerven" },
        { question: "Vad är diafragmans funktion?", options: ["Hjälper till med andning", "Reglerar kroppstemperaturen", "Producerar röda blodkroppar"], answer: "Hjälper till med andning" }
    ];


// Funktion för att slumpa quizfrågor
function shuffleQuestions() {
    questions = [...questions].sort(() => Math.random() - 0.5);
}

let currentQuestionIndex = 0;

function showQuestion(index) {
    if (questions.length === 0) {
        document.getElementById("quiz-container").innerHTML = "<p>Inga frågor tillgängliga.</p>";
        return;
    }
    if (index >= questions.length) {
        document.getElementById("quiz-container").innerHTML = "<p>Quizet är klart! Bra jobbat!</p>";
        return;
    }
    
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = "";
    const q = questions[index];

    const questionEl = document.createElement("div");
    questionEl.innerHTML = `<p>${index + 1}. ${q.question}</p>`;

    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = function () {
            checkAnswer(btn, q.answer);
        };
        questionEl.appendChild(btn);
    });

    quizContainer.appendChild(questionEl);
}

function checkAnswer(button, correctAnswer) {
    document.querySelectorAll("#quiz-container button").forEach(btn => btn.disabled = true);
    if (button.textContent === correctAnswer) {
        button.style.backgroundColor = "lightgreen";
        setTimeout(showNextQuestion, 1000);
    } else {
        button.style.backgroundColor = "lightcoral";
        setTimeout(() => {
            document.querySelectorAll("#quiz-container button").forEach(btn => btn.disabled = false);
            showQuestion(currentQuestionIndex);
        }, 1000);
    }
}

function showNextQuestion() {
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
}
