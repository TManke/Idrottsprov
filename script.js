const questions = [
    {
        question: "Vad betyder fysisk hälsa?",
        options: ["Att känna sig glad", "Att kroppen mår bra", "Att ha många vänner"],
        answer: "Att kroppen mår bra"
    },
    {
        question: "Vad betyder psykisk hälsa?",
        options: ["Hur vi mår inuti", "Hur snabbt vi springer", "Hur starka våra muskler är"],
        answer: "Hur vi mår inuti"
    },
    {
        question: "Vad betyder social hälsa?",
        options: ["Att vi har bra relationer och känner gemenskap", "Att vi tränar mycket", "Att vi äter hälsosamt"],
        answer: "Att vi har bra relationer och känner gemenskap"
    },
    {
        question: "Hur kan träning påverka vår psykiska hälsa?",
        options: ["Den gör oss tröttare", "Den minskar stress och gör oss gladare", "Den gör oss hungrigare"],
        answer: "Den minskar stress och gör oss gladare"
    },
    {
        question: "Vilken av dessa är en fysisk effekt av träning?",
        options: ["Bättre balans", "Ökad stress", "Sämre koncentration"],
        answer: "Bättre balans"
    },
    {
        question: "Vilken av dessa är en psykisk effekt av träning?",
        options: ["Bättre minne", "Svagare muskler", "Sämre immunförsvar"],
        answer: "Bättre minne"
    },
    {
        question: "Vilken av dessa är en social effekt av träning?",
        options: ["Ökad gemenskap", "Bättre kondition", "Starkare skelett"],
        answer: "Ökad gemenskap"
    },
    {
        question: "Hur många minuter om dagen bör barn och unga röra sig?",
        options: ["30 minuter", "60 minuter", "90 minuter"],
        answer: "60 minuter"
    },
    {
        question: "Vilopuls är...",
        options: ["Pulsen när vi vilar", "Pulsen vid fysisk aktivitet", "Den högsta pulsen vi kan ha"],
        answer: "Pulsen när vi vilar"
    },
    {
        question: "Vad är maxpuls?",
        options: ["Pulsen vid vila", "Den högsta pulsen kroppen kan ha", "Pulsen vid lätt träning"],
        answer: "Den högsta pulsen kroppen kan ha"
    },
    {
        question: "Vad ger kolhydrater till kroppen?",
        options: ["Energi", "Skydd mot sjukdomar", "Bygger muskler"],
        answer: "Energi"
    },
    {
        question: "Varför är sömn viktigt?",
        options: ["För att kroppen och hjärnan ska återhämta sig", "För att vi ska bli hungrigare", "För att få bättre syn"],
        answer: "För att kroppen och hjärnan ska återhämta sig"
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

        resetColors();
    } else {
        document.getElementById("question").innerText = "Grattis! Du har slutfört quizet!";
        document.getElementById("option1").style.display = "none";
        document.getElementById("option2").style.display = "none";
        document.getElementById("option3").style.display = "none";
    }
}

function checkAnswer(event) {
    if (event.target.innerText === questions[currentQuestion].answer) {
        event.target.style.backgroundColor = "lightgreen"; // Rätt svar blir grönt
        setTimeout(() => {
            currentQuestion++;
            showQuestion();
        }, 1000); // Går till nästa fråga efter 1 sekund
    } else {
        event.target.style.backgroundColor = "lightcoral"; // Fel svar blir rött
    }
}

function resetColors() {
    document.getElementById("option1").style.backgroundColor = "";
    document.getElementById("option2").style.backgroundColor = "";
    document.getElementById("option3").style.backgroundColor = "";
}
