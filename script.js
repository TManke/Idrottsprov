document.addEventListener("DOMContentLoaded", function () {
    // Hämta alla sektioner
    const quizSection = document.getElementById("quiz-section");
    const imageQuizSection = document.getElementById("image-quiz-section");
    const dragDropSection = document.getElementById("drag-drop-section");

    // Hämta knapparna
    const quizBtn = document.getElementById("quiz-btn");
    const imageQuizBtn = document.getElementById("image-quiz-btn");
    const dragDropBtn = document.getElementById("drag-drop-btn");

    // Visa bara quizet vid start
    quizSection.style.display = "block";
    imageQuizSection.style.display = "none";
    dragDropSection.style.display = "none";

    // Eventlyssnare för knapparna
    quizBtn.addEventListener("click", function () {
        showSection(quizSection);
    });

    imageQuizBtn.addEventListener("click", function () {
        showSection(imageQuizSection);
    });

    dragDropBtn.addEventListener("click", function () {
        showSection(dragDropSection);
    });

    // Funktion för att visa rätt sektion och dölja andra
    function showSection(section) {
        quizSection.style.display = "none";
        imageQuizSection.style.display = "none";
        dragDropSection.style.display = "none";

        section.style.display = "block";
    }

    // Quiz med 30 frågor
    const questions = [
        { question: "Vad är hjärtats huvudsakliga funktion?", answer: "Att pumpa blod" },
        { question: "Vilken del av kroppen ansvarar för gasutbyte?", answer: "Lungorna" },
        { question: "Vad heter det största blodkärlet i kroppen?", answer: "Aortan" },
        // Lägg till fler frågor här (totalt 30 frågor)
    ];

    const quizContainer = document.getElementById("quiz-container");
    questions.forEach((q, index) => {
        const questionEl = document.createElement("div");
        questionEl.innerHTML = `<p>${index + 1}. ${q.question}</p>
            <input type="text" id="answer-${index}" />
            <button onclick="checkAnswer(${index}, '${q.answer}')">Kolla svar</button>
            <span id="result-${index}"></span>`;
        quizContainer.appendChild(questionEl);
    });

    window.checkAnswer = function (index, correctAnswer) {
        const userAnswer = document.getElementById(`answer-${index}`).value.trim();
        const resultEl = document.getElementById(`result-${index}`);

        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            resultEl.innerHTML = "✅ Rätt!";
            resultEl.style.color = "green";
        } else {
            resultEl.innerHTML = "❌ Fel, försök igen.";
            resultEl.style.color = "red";
        }
    };

    // Bildquiz (Exempel, behöver anpassas)
    const imageQuizContainer = document.getElementById("image-quiz-container");
    const imageQuestions = [
        { img: "1.png", question: "Vad kallas denna kroppsdel?", answer: "Hjärtat" },
        { img: "2.png", question: "Vad visar denna bild?", answer: "Blodomloppet" },
        // Lägg till fler bildfrågor
    ];

    imageQuestions.forEach((q, index) => {
        const imgEl = document.createElement("img");
        imgEl.src = q.img;
        imgEl.alt = `Fråga ${index + 1}`;
        imgEl.style.width = "200px";

        const questionEl = document.createElement("div");
        questionEl.innerHTML = `<p>${q.question}</p>
            <input type="text" id="image-answer-${index}" />
            <button onclick="checkImageAnswer(${index}, '${q.answer}')">Kolla svar</button>
            <span id="image-result-${index}"></span>`;

        imageQuizContainer.appendChild(imgEl);
        imageQuizContainer.appendChild(questionEl);
    });

    window.checkImageAnswer = function (index, correctAnswer) {
        const userAnswer = document.getElementById(`image-answer-${index}`).value.trim();
        const resultEl = document.getElementById(`image-result-${index}`);

        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            resultEl.innerHTML = "✅ Rätt!";
            resultEl.style.color = "green";
        } else {
            resultEl.innerHTML = "❌ Fel, försök igen.";
            resultEl.style.color = "red";
        }
    };

    // Drag-och-släpp-funktion
    const dragItems = document.querySelectorAll(".drag-item");
    const dropZones = document.querySelectorAll(".drop-zone");

    dragItems.forEach((item) => {
        item.addEventListener("dragstart", (event) => {
            event.dataTransfer.setData("text", event.target.id);
        });
    });

    dropZones.forEach((zone) => {
        zone.addEventListener("dragover", (event) => {
            event.preventDefault();
        });

        zone.addEventListener("drop", (event) => {
            event.preventDefault();
            const draggedId = event.dataTransfer.getData("text");
            const draggedItem = document.getElementById(draggedId);
            event.target.appendChild(draggedItem);
        });
    });
});
