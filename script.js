// Uppdaterat script för att hantera flera quiz

document.addEventListener("DOMContentLoaded", () => {
    const quizSelector = document.createElement("div");
    quizSelector.innerHTML = `
        <button onclick="toggleQuiz('quiz1')">Quiz 1</button>
        <button onclick="toggleQuiz('quiz2')">Quiz 2</button>
    `;
    document.body.insertBefore(quizSelector, document.getElementById("quiz"));
});

const quizzes = {
    'quiz1': [
        { question: "Vad heter kroppens största organ?", options: ["Hjärtat", "Levern", "Huden", "Lungorna"], answer: "Huden" },
        { question: "Vilken funktion har de röda blodkropparna?", options: ["Transportera syre", "Bekämpa infektioner", "Producera hormoner", "Reglera kroppstemperatur"], answer: "Transportera syre" },
    ],
    'quiz2': [
        { question: "Vad är aortans funktion?", options: ["Pumpar blod till hjärtat", "Leder blod bort från hjärtat", "Renar blodet", "Transporterar näringsämnen"], answer: "Leder blod bort från hjärtat" },
        { question: "Vilket av följande är en del av skelettet?", options: ["Kapillärer", "Fibrer", "Lårben", "Hormoner"], answer: "Lårben" },
    ]
};

let currentQuiz = 'quiz1';

// Funktion för att visa quiz-frågor
toggleQuiz = (quizName) => {
    currentQuiz = quizName;
    loadQuiz();
};

// Funktion för att ladda quizet
function loadQuiz() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = "";
    quizzes[currentQuiz].forEach((q, index) => {
        let questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.innerHTML = `<p>${q.question}</p>`;

        q.options.forEach(option => {
            let button = document.createElement("button");
            button.innerText = option;
            button.onclick = () => checkAnswer(button, q.answer);
            questionDiv.appendChild(button);
        });
        quizContainer.appendChild(questionDiv);
    });
}

// Funktion för att kolla svar
function checkAnswer(button, correctAnswer) {
    if (button.innerText === correctAnswer) {
        button.style.backgroundColor = "green";
    } else {
        button.style.backgroundColor = "red";
    }
}

// Ladda första quizet vid start
window.onload = loadQuiz;
