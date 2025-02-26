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

    // Quiz med 300 frågor (flervalsfrågor)
    const questions = [
        { question: "Vad är hjärtats huvudsakliga funktion?", options: ["Att pumpa blod", "Att producera syre", "Att bryta ner mat"], answer: "Att pumpa blod" },
        { question: "Vilken del av kroppen ansvarar för gasutbyte?", options: ["Hjärtat", "Lungorna", "Levern"], answer: "Lungorna" },
        { question: "Vad heter det största blodkärlet i kroppen?", options: ["Vena cava", "Aortan", "Kapillärer"], answer: "Aortan" },
        { question: "Vilket organ filtrerar blodet?", options: ["Magsäcken", "Njurar", "Lungorna"], answer: "Njurar" },
        { question: "Vad kallas de minsta blodkärlen?", options: ["Artärer", "Vener", "Kapillärer"], answer: "Kapillärer" },
        { question: "Vilken del av hjärnan styr balans?", options: ["Lillhjärnan", "Storhjärnan", "Hjärnstammen"], answer: "Lillhjärnan" },
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
        if (button.textContent === correctAnswer) {
            button.style.backgroundColor = "green";
        } else {
            button.style.backgroundColor = "red";
        }
    }

    // Drag & Släpp
    const dragItems = document.querySelectorAll(".drag-item");
    const dropArea = document.getElementById("drop-area");
    
    dragItems.forEach(item => {
        item.addEventListener("dragstart", event => {
            event.dataTransfer.setData("text", event.target.textContent);
        });
    });

    dropArea.addEventListener("dragover", event => {
        event.preventDefault();
    });

    dropArea.addEventListener("drop", event => {
        event.preventDefault();
        const data = event.dataTransfer.getData("text");
        dropArea.innerHTML += `<p>${data}</p>`;
    });
});
