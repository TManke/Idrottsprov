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

    // Quiz med 30 frågor
    const questions = [
        { question: "Vad är hjärtats huvudsakliga funktion?", answer: "Att pumpa blod" },
        { question: "Vilken del av kroppen ansvarar för gasutbyte?", answer: "Lungorna" },
        { question: "Vad heter det största blodkärlet i kroppen?", answer: "Aortan" },
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
        resultEl.innerHTML = userAnswer.toLowerCase() === correctAnswer.toLowerCase() ? "✅ Rätt!" : "❌ Fel, försök igen.";
        resultEl.style.color = userAnswer.toLowerCase() === correctAnswer.toLowerCase() ? "green" : "red";
    };

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
