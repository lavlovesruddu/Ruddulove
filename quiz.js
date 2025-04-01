const questions = [
    {
        question: "What is my favorite color?",
        options: ["Red", "Blue", "Black", "White"],
        correct: 1 // Blue
    },
    {
        question: "Who is my favorite footballer?",
        options: ["Messi", "Ronaldo", "Neymar", "Mbappe"],
        correct: 1 // Ronaldo
    },
    {
        question: "Where did we first meet in real life?",
        options: ["Mall", "School", "Bus", "Cafe"],
        correct: 2 // Bus
    },
    {
        question: "Who loves you more than himself?",
        options: ["Me", "Me", "Me", "Me"],
        correct: 0 // Any option is correct
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    let questionData = questions[currentQuestionIndex];
    document.getElementById("question-text").textContent = questionData.question;
    let buttons = document.getElementsByClassName("quiz-option");
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].textContent = questionData.options[i];
    }

    document.getElementById("quiz-feedback").textContent = "";
    document.getElementById("next-question").style.display = "none";
}

function checkAnswer(selectedIndex) {
    let questionData = questions[currentQuestionIndex];

    if (selectedIndex === questionData.correct || currentQuestionIndex === 3) {
        document.getElementById("quiz-feedback").textContent = "Correct! 💙";
        document.getElementById("quiz-feedback").style.color = "#42b883";
    } else {
        document.getElementById("quiz-feedback").textContent = "Oops! Wrong answer 😢";
        document.getElementById("quiz-feedback").style.color = "#ff5e7d";
    }

    document.getElementById("next-question").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.querySelector(".quiz-container").innerHTML = `
            <div id="quiz-complete">
                <h1>YAYYYY! You Completed the Quiz! You know me Love!! 🎉</h1>
                <button class="timeline-btn" onclick="window.location.href='timeline.html'">Let's See Our Timeline</button>
            </div>
        `;
    }
}


// Load the first question when the page loads
window.onload = loadQuestion;
