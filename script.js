const questions = [
    {
        question: "Vad betyder fysisk hälsa?",
        options: ["Att känna sig glad", "Att kroppen mår bra", "Att ha många vänner"],
        answer: "Att kroppen mår bra"
    },
    {
        question: "Vilken funktion har kolhydrater i kroppen?",
        options: ["Bygger muskler", "Skyddar mot sjukdomar", "Ger energi"],
        answer: "Ger energi"
    },
    {
        question: "Hur många minuter per dag bör barn röra sig?",
        options: ["30 minuter", "60 minuter", "90 minuter"],
        answer: "60 minuter"
    }
];

let currentQuestion = 0;

function startQuiz() {
    showQuestion();
}

function showQuestion() {
    if (currentQuestion < questions.length) {
        document.getElementById("question").innerText = questions[currentQuestion].question;
        document.getElementById("option1").innerText = questions[currentQuestion].options[0];
        document.getElementById("option2").innerText = questions[currentQuestion].options[1];
        document.getElementById("option3").innerText = questions[currentQuestion].options[2];

        document.getElementById("option1").onclick = checkAnswer;
        document.getElementById("option2").onclick = checkAnswer;
        document.getElementById("option3").onclick = checkAnswer;
    } else {
        document.getElementById("question").innerText = "Grattis! Du har slutfört quizet!";
        document.getElementById("option1").style.display = "none";
        document.getElementById("option2").style.display = "none";
        document.getElementById("option3").style.display = "none";
    }
}

function checkAnswer(event) {
    if (event.target.innerText === questions[currentQuestion].answer) {
        alert("Rätt!");
        currentQuestion++;
        showQuestion();
    } else {
        alert("Fel, försök igen!");
    }
}
