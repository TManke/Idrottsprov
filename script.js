// Uppdaterat script.js för att inkludera alla funktioner

document.addEventListener("DOMContentLoaded", function () {
    // Hämta knapparna
    const quizButton = document.getElementById("quizButton");
    const imageQuizButton = document.getElementById("imageQuizButton");
    const dragDropButton = document.getElementById("dragDropButton");
    
    // Hämta sektionerna
    const quizSection = document.getElementById("quizSection");
    const imageQuizSection = document.getElementById("imageQuizSection");
    const dragDropSection = document.getElementById("dragDropSection");
    
    // Visa rätt sektion vid knapptryck
    quizButton.addEventListener("click", function () {
        showSection(quizSection);
    });

    imageQuizButton.addEventListener("click", function () {
        showSection(imageQuizSection);
    });

    dragDropButton.addEventListener("click", function () {
        showSection(dragDropSection);
    });

    function showSection(section) {
        quizSection.style.display = "none";
        imageQuizSection.style.display = "none";
        dragDropSection.style.display = "none";
        section.style.display = "block";
    }

    // QUIZ MED 30 FRÅGOR
    const quizQuestions = [
        { question: "Vad heter kroppens största organ?", options: ["Hjärnan", "Levern", "Huden"], answer: "Huden" },
        { question: "Vilket ämne transporterar syre i blodet?", options: ["Hemoglobin", "Insulin", "Kollagen"], answer: "Hemoglobin" },
        // Lägg till fler frågor här upp till 30
    ];

    const quizContainer = document.getElementById("quiz");
    quizQuestions.forEach((q, index) => {
        const questionElem = document.createElement("div");
        questionElem.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
        q.options.forEach(option => {
            const btn = document.createElement("button");
            btn.textContent = option;
            btn.addEventListener("click", function () {
                if (option === q.answer) {
                    btn.style.backgroundColor = "green";
                } else {
                    btn.style.backgroundColor = "red";
                }
            });
            questionElem.appendChild(btn);
        });
        quizContainer.appendChild(questionElem);
    });

    // BILDQUIZ
    const imageQuizContainer = document.getElementById("imageQuiz");
    const imageQuestions = [
        { img: "1.png", question: "Vad visar bilden?", answer: "Blodomloppet" },
        { img: "2.png", question: "Vad innehåller blodet?", answer: "Röda blodkroppar" },
        // Lägg till fler bildfrågor
    ];

    imageQuestions.forEach(q => {
        const imgElem = document.createElement("img");
        imgElem.src = q.img;
        imgElem.style.width = "200px";
        const questionElem = document.createElement("p");
        questionElem.textContent = q.question;
        const inputElem = document.createElement("input");
        const checkBtn = document.createElement("button");
        checkBtn.textContent = "Kolla svar";
        checkBtn.addEventListener("click", function () {
            if (inputElem.value.toLowerCase() === q.answer.toLowerCase()) {
                inputElem.style.backgroundColor = "green";
            } else {
                inputElem.style.backgroundColor = "red";
            }
        });
        imageQuizContainer.appendChild(imgElem);
        imageQuizContainer.appendChild(questionElem);
        imageQuizContainer.appendChild(inputElem);
        imageQuizContainer.appendChild(checkBtn);
    });

    // DRAG & DROP
    const dragDropContainer = document.getElementById("dragDrop");
    const items = [
        { id: "heart", text: "Hjärta" },
        { id: "lung", text: "Lunga" }
    ];
    const dropZones = [
        { id: "heart-zone", text: "Här ska hjärtat vara" },
        { id: "lung-zone", text: "Här ska lungan vara" }
    ];

    items.forEach(item => {
        const elem = document.createElement("div");
        elem.textContent = item.text;
        elem.setAttribute("draggable", true);
        elem.setAttribute("id", item.id);
        elem.style.padding = "10px";
        elem.style.margin = "5px";
        elem.style.backgroundColor = "lightblue";
        dragDropContainer.appendChild(elem);

        elem.addEventListener("dragstart", function (e) {
            e.dataTransfer.setData("text", e.target.id);
        });
    });

    dropZones.forEach(zone => {
        const dropElem = document.createElement("div");
        dropElem.textContent = zone.text;
        dropElem.setAttribute("id", zone.id);
        dropElem.style.padding = "20px";
        dropElem.style.margin = "10px";
        dropElem.style.border = "2px dashed black";
        dragDropContainer.appendChild(dropElem);

        dropElem.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        dropElem.addEventListener("drop", function (e) {
            e.preventDefault();
            const data = e.dataTransfer.getData("text");
            const draggedElem = document.getElementById(data);
            if (zone.id.includes(data)) {
                dropElem.appendChild(draggedElem);
                dropElem.style.backgroundColor = "lightgreen";
            } else {
                dropElem.style.backgroundColor = "lightcoral";
            }
        });
    });
});
