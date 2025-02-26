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
        { question: "Vad kallas de minsta blodkärlen?", options: ["Artärer", "Vener", "Kapillärer"], answer: "Kapillärer" }
    ];
    
    let currentQuestionIndex = 0;
    const quizContainer = document.getElementById("quiz-container");

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
