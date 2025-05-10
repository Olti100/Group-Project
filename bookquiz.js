const questions = [
    {
        question: "Who wrote the book '1984'?",
        options: ["Ray Bradbury", "George Orwell", "Aldous Huxley", "J.K. Rowling"],
        correctAnswer: 3
    },
    {
        question: "What is the title of the first Harry Potter book?",
        options: ["Harry Potter and the Chamber of Secrets", "Harry Potter and the Philosopher's Stone", "Harry Potter and the Prisoner of Azkaban", "Harry Potter and the Goblet of Fire"],
        correctAnswer: 1
    },
    {
        question: "In 'To Kill a Mockingbird', who is the narrator?",
        options: ["Atticus Finch", "Jem Finch", "Scout Finch", "Boo Radley"],
        correctAnswer: 2
    },
    {
        question: "In which book would you find the character 'Frodo Baggins'?",
        options: ["The Hobbit", "The Lord of the Rings", "The Silmarillion", "Harry Potter"],
        correctAnswer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("result").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;
    const options = document.getElementById("options");
    options.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = function () {
            checkAnswer(index);
        };
        li.appendChild(button);
        options.appendChild(li);
    });
}

function checkAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestionIndex].correctAnswer;
    if (selectedIndex === correctIndex) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("score").innerText = score;
}

// Initialize the quiz when the page loads
window.onload = startQuiz;