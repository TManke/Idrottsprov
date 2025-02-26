document.addEventListener("DOMContentLoaded", function () {
    // Funktion för att visa rätt sektion
    function showSection(sectionId) {
        document.querySelectorAll(".section").forEach(section => {
            section.style.display = "none";
        });
        document.getElementById(sectionId).style.display = "block";
    }

    window.showSection = showSection;
    showSection("quiz-section"); // Visa quiz som standard

    // Quiz med 30 frågor (flervalsfrågor)
    const questions = [
        { question: "Vad är hjärtats huvudsakliga funktion?", options: ["Att pumpa blod", "Att producera syre", "Att bryta ner mat"], answer: "Att pumpa blod" },
        { question: "Vilken del av kroppen ansvarar för gasutbyte?", options: ["Hjärtat", "Lungorna", "Levern"], answer: "Lungorna" },
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

    
    let currentQuestionIndex = 0;
    const quizContainer = document.getElementById("quiz-container");
    const nextButton = document.createElement("button");
    nextButton.textContent = "Nästa fråga";
    nextButton.style.display = "none";
    nextButton.onclick = showNextQuestion;
    quizContainer.appendChild(nextButton);

    function showQuestion(index) {
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
        quizContainer.appendChild(nextButton);
        nextButton.style.display = "none";
        nextButton.disabled = false; // Återaktivera nästa-knappen
    }

    function checkAnswer(button, correctAnswer) {
        document.querySelectorAll("button").forEach(btn => btn.disabled = true);
        if (button.textContent === correctAnswer) {
            button.style.backgroundColor = "lightgreen";
        } else {
            button.style.backgroundColor = "lightcoral";
        }
        nextButton.style.display = "block";
        nextButton.disabled = false; // Se till att knappen kan klickas
    }

    function showNextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(currentQuestionIndex);
        } else {
            quizContainer.innerHTML = "<p>Quizet är klart! Bra jobbat!</p>";
        }
    }

    showQuestion(currentQuestionIndex);

    // Bildquiz med bilder
    const imageQuizContainer = document.getElementById("image-quiz-container");
    const imageQuestions = [
        { img: "1.png", question: "Vad föreställer denna bild?", options: ["Hjärtat", "Lungorna", "Levern"], answer: "Hjärtat" },
        { img: "2.png", question: "Vilken del av kroppen är detta?", options: ["Njurar", "Lungorna", "Magsäcken"], answer: "Lungorna" },
        { img: "3.png", question: "Vad visas på denna bild?", options: ["Blodomloppet", "Skelettet", "Muskler"], answer: "Blodomloppet" }
    ];
    
    imageQuestions.forEach((q, index) => {
        const imgEl = document.createElement("img");
        imgEl.src = q.img;
        imgEl.style.width = "200px";
        const questionEl = document.createElement("p");
        questionEl.textContent = q.question;
        
        q.options.forEach(option => {
            const btn = document.createElement("button");
            btn.textContent = option;
            btn.onclick = function () {
                checkAnswer(btn, q.answer);
            };
            questionEl.appendChild(btn);
        });
        
        imageQuizContainer.appendChild(imgEl);
        imageQuizContainer.appendChild(questionEl);
    });
});
