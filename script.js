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
        { question: "Vilken del av hjärnan styr balans?", options: ["Lillhjärnan", "Storhjärnan", "Hjärnstammen"], answer: "Lillhjärnan" },
        { question: "Vad gör blodplättar?", options: ["Transporterar syre", "Koagulerar blod", "Bryter ner fett"], answer: "Koagulerar blod" },
        { question: "Vad är kroppens största organ?", options: ["Huden", "Levern", "Lungorna"], answer: "Huden" },
        { question: "Hur många ben har en människa?", options: ["206", "150", "300"], answer: "206" },
        { question: "Vilken muskel är störst i kroppen?", options: ["Biceps", "Gluteus maximus", "Hjärtmuskeln"], answer: "Gluteus maximus" },
        { question: "Vilken blodkropp bekämpar infektioner?", options: ["Röda blodkroppar", "Vita blodkroppar", "Blodplättar"], answer: "Vita blodkroppar" },
        { question: "Vad heter kroppens minsta ben?", options: ["Stigbygeln", "Lårbenet", "Nyckelbenet"], answer: "Stigbygeln" },
        { question: "Vilken del av hjärtat pumpar blod till kroppen?", options: ["Höger kammare", "Vänster kammare", "Förmaken"], answer: "Vänster kammare" },
        { question: "Vilken gas andas vi in mest av?", options: ["Syre", "Koldioxid", "Kväve"], answer: "Kväve" },
        { question: "Hur många lungor har vi?", options: ["1", "2", "3"], answer: "2" },
        { question: "Vilken del av ögat reglerar ljusinsläpp?", options: ["Linsen", "Pupillen", "Hornhinnan"], answer: "Pupillen" },
        { question: "Vad gör njurarna?", options: ["Bryter ner fett", "Filtrerar blodet", "Producerar insulin"], answer: "Filtrerar blodet" },
        { question: "Vilket organ producerar insulin?", options: ["Levern", "Bukspottkörteln", "Mjälten"], answer: "Bukspottkörteln" },
        { question: "Hur många kammare har hjärtat?", options: ["2", "3", "4"], answer: "4" },
        { question: "Vilken funktion har levern?", options: ["Producera insulin", "Bryta ner gifter", "Transportera syre"], answer: "Bryta ner gifter" },
        { question: "Vilken del av hjärnan styr andningen?", options: ["Storhjärnan", "Hjärnstammen", "Lillhjärnan"], answer: "Hjärnstammen" },
        { question: "Vad är det kemiska tecknet för syre?", options: ["O", "H", "C"], answer: "O" },
        { question: "Vad gör lungorna?", options: ["Filtrerar blod", "Syresätter blod", "Producerar insulin"], answer: "Syresätter blod" },
        { question: "Hur många revben har en människa?", options: ["10", "12", "14"], answer: "12" },
        { question: "Vilken del av hjärtat tar emot syrefattigt blod?", options: ["Höger förmak", "Vänster kammare", "Höger kammare"], answer: "Höger förmak" },
        { question: "Vad transporterar syre i blodet?", options: ["Hemoglobin", "Insulin", "Kollagen"], answer: "Hemoglobin" }
    ];
    
    const quizContainer = document.getElementById("quiz-container");
    questions.forEach((q, index) => {
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
    });

    function checkAnswer(button, correctAnswer) {
        document.querySelectorAll("button").forEach(btn => btn.style.backgroundColor = "");
        if (button.textContent === correctAnswer) {
            button.style.backgroundColor = "lightgreen";
        } else {
            button.style.backgroundColor = "lightcoral";
        }
    }
});
