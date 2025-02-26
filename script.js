const questions = [
    { question: "Vad är cellandning?", options: ["Druvsocker + syre → koldioxid + vatten + energi", "Syre + vatten → druvsocker + koldioxid", "Blodet transporterar syre till musklerna"], answer: "Druvsocker + syre → koldioxid + vatten + energi" },
    { question: "Vad är kroppens största organ?", options: ["Huden", "Levern", "Hjärtat"], answer: "Huden" },
    { question: "Vilka tre lager består huden av?", options: ["Överhuden, läderhuden, underhuden", "Ytskiktet, mellanlagret, inre huden", "Epidermis, dermis, hypodermis"], answer: "Överhuden, läderhuden, underhuden" },
    { question: "Vilket ämne gör skelettet starkt?", options: ["Kalk", "Järn", "Protein"], answer: "Kalk" },
    { question: "Vilket ben skyddar hjärnan?", options: ["Skallbenet", "Lårbenet", "Nyckelbenet"], answer: "Skallbenet" },
    { question: "Vad bildas i benmärgen?", options: ["Blodceller", "Muskelfibrer", "Kalk"], answer: "Blodceller" },
    { question: "Vad är en kulled?", options: ["En led som kan röra sig i alla riktningar", "En led som bara kan böjas åt ett håll", "En benstruktur i foten"], answer: "En led som kan röra sig i alla riktningar" },
    { question: "Var finns gångjärnsleder?", options: ["Knän och armbågar", "Axlar och höfter", "Fingrar och tår"], answer: "Knän och armbågar" },
    { question: "Vilka muskler styr vi med viljan?", options: ["Skelettmuskler", "Hjärtmuskler", "Glatt muskulatur"], answer: "Skelettmuskler" },
    { question: "Vilka två muskler samarbetar i överarmen?", options: ["Biceps och triceps", "Quadriceps och hamstrings", "Pectoralis och deltoideus"], answer: "Biceps och triceps" },
    { question: "Vad gör hjärtat?", options: ["Pumpar runt blodet i kroppen", "Producerar syre", "Renar blodet"], answer: "Pumpar runt blodet i kroppen" },
    { question: "Vad gör röda blodkroppar?", options: ["Transporterar syre", "Bekämpar bakterier", "Läker sår"], answer: "Transporterar syre" },
    { question: "Vad gör vita blodkroppar?", options: ["Bekämpar infektioner", "Transporterar näring", "Producera hormoner"], answer: "Bekämpar infektioner" },
    { question: "Vad gör blodplättar?", options: ["Hjälper blodet att koagulera", "Transporterar syre", "Bryter ner socker"], answer: "Hjälper blodet att koagulera" },
    { question: "Vad kallas blodkärlen som transporterar syrerikt blod?", options: ["Artärer", "Vener", "Kapillärer"], answer: "Artärer" },
    { question: "Vad är puls?", options: ["Hur snabbt hjärtat slår", "Trycket i lungorna", "Hjärnans elektriska aktivitet"], answer: "Hur snabbt hjärtat slår" },
    { question: "Vad är immunsystemets funktion?", options: ["Skydda kroppen mot sjukdomar", "Transportera syre", "Producera insulin"], answer: "Skydda kroppen mot sjukdomar" },
    { question: "Vad är antibiotika effektivt mot?", options: ["Bakterier", "Virus", "Svampinfektioner"], answer: "Bakterier" },
    { question: "Hur fungerar vaccin?", options: ["Lär kroppen att försvara sig mot ett visst virus", "Dödar bakterier direkt", "Gör kroppen immun mot alla sjukdomar"], answer: "Lär kroppen att försvara sig mot ett visst virus" },
    { question: "Vad sker under puberteten?", options: ["Kroppen förändras till en vuxenkropp", "Blodcirkulationen ökar", "Immunförsvaret blir svagare"], answer: "Kroppen förändras till en vuxenkropp" },
    { question: "Vad orsakar målbrottet hos pojkar?", options: ["Förändringar i struphuvudet", "Ökad muskelmassa", "Tillväxt av hjärnan"], answer: "Förändringar i struphuvudet" },
    { question: "Vad kan puberteten leda till på huden?", options: ["Akne", "Eksem", "Hudcancer"], answer: "Akne" },
    { question: "Vad betyder könsmogen?", options: ["Att man kan få barn", "Att man har en vuxen hjärna", "Att man har slutat växa"], answer: "Att man kan få barn" },
    { question: "Vilka blodkärl transporterar syrefattigt blod?", options: ["Vener", "Artärer", "Kapillärer"], answer: "Vener" },
    { question: "Vad är kroppens minsta blodkärl?", options: ["Kapillärer", "Artärer", "Vener"], answer: "Kapillärer" },
    { question: "Varför ökar pulsen när vi tränar?", options: ["För att transportera mer syre", "För att kyla ner kroppen", "För att förbränna fett"], answer: "För att transportera mer syre" },
    { question: "Vilken typ av blodkropp bekämpar virus?", options: ["Vita blodkroppar", "Röda blodkroppar", "Blodplättar"], answer: "Vita blodkroppar" }
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
        event.target.style.backgroundColor = "lightgreen";
        setTimeout(() => {
            currentQuestion++;
            showQuestion();
        }, 1000);
    } else {
        event.target.style.backgroundColor = "lightcoral";
    }
}

function resetColors() {
    document.getElementById("option1").style.backgroundColor = "";
    document.getElementById("option2").style.backgroundColor = "";
    document.getElementById("option3").style.backgroundColor = "";
}
