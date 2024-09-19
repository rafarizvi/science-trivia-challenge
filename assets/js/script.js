//selects all classes and ids defined in html file
const startEl = document.getElementById('container2')
const introEl = document.querySelector(".intro");
const msgEl = document.querySelector(".message");
const sButtonDiv = document.querySelector(".startButton");
const qEl = document.querySelector(".question");
const ch1El = document.getElementById("choice1");
const ch2El = document.getElementById("choice2");
const ch3El = document.getElementById("choice3");
const ch4El = document.getElementById("choice4");
const chArray = [ch1El, ch2El, ch3El, ch4El];
const resultEl = document.querySelector(".result");
let timerEl = document.querySelector(".timer");

//hides the buttons created for the choices.
for (i = 0; i < 4; i++) {
    chArray[i].classList.add('hide');
}

// array containing all questions.
const questions = ["1. The concept of gravity was discovered by which famous physicist?",
    "2. Which is the most abundant element in the universe?",
    "3. What is the only planet that spins clockwise?",
    "4. How many bones do sharks have in their bodies?",
    "5. What is the heaviest organ in the human body?"];

// array containing all answers.
const answers = ["Sir Isaac Newton", "Hydrogen", "Venus", "0", "Liver"];
// array containing all choices to question 1.
const q1Choices = ["Albert Einstein", "Sir Isaac Newton", "Galileo Galilei", "Stephen Hawking"];
// array containing all choices to question 2.
const q2Choices = ["Hydrogen", "Carbon", "Oxygen", "Nitrogen"];
// array containing all choices to question 3.
const q3Choices = ["Mercury", "Earth", "Neptune", "Venus"];
// array containing all choices to question 4.
const q4Choices = ["0", "3", "206", "1800"];
// array containing all choices to question 5.
const q5Choices = ["Heart", "Liver", "Brain", "Kidney"];
// array containing all choice arrays
const allChoices = [q1Choices, q2Choices, q3Choices, q4Choices, q5Choices];
// adds text content to h1 and p tags
introEl.textContent = " Science Trivia Quiz Challenge ";
msgEl.textContent = "Try to answer the following science trivia challenge within the time limit. Incorrect answers will reduce the time by 10 seconds. Lets GO!";

// creates start button
let startButton = document.createElement("button");
startButton.textContent = "START";
sButtonDiv.appendChild(startButton);

// adds event listener to start button
startButton.addEventListener("click", function () {
    startEl.classList.add('hide');
    // starts timer, which starts the quiz.
    startTimer();
})


let givenTime = 75;
function startTimer() {

    let timer = setInterval(function () {
        givenTime--;
        if (givenTime < 0) {
            clearInterval(timer);
            localStorage.setItem("time", JSON.stringify(0));
            window.location.href = "./highscore.html";
        } else {
            timerEl.textContent = givenTime;
        }
    }, 1000)
    startQuiz();
}

// displays result if correct for 3 secs. 
function correctResult() {
    let time1 = 3;
    let correctTimer = setInterval(function () {
        time1--;
        if (time1 === 0) {
            clearInterval(correctTimer);
            resultEl.textContent = '';
        } else {
            resultEl.textContent = "Correct!";
        }
    }, 1000)
}
// Displays result if wrong for 3 secs. 
function inCorrectResult() {
    givenTime = givenTime - 10;
    let time2 = 3;
    let inCorrectTimer = setInterval(function () {
        time2--;
        if (time2 === 0) {
            clearInterval(inCorrectTimer);
            resultEl.textContent = '';
        } else {
            resultEl.textContent = "Wrong :(";
        }
    }, 1000)
}

// Starts the quiz.
function startQuiz() {
    for (i = 0; i < 4; i++) {
        chArray[i].classList.remove('hide');
    }
    qs();
}

// Displays the questions starting from the question number one.
let question = 0

// Displays the multiple choices by adding text, value, and event listeners to choice buttons. This is repeated for all questions.
function qs() {
    if (question > questions.length - 1) {
        // Ends quiz after displaying all questions. Then jumps to second html page in 3secs.
        localStorage.setItem("time", JSON.stringify(givenTime));
        let endTime = 3;
        let endTimer = setInterval(function () {
            endTime--;
            if (endTime === 0) {
                clearInterval(endTimer);
                window.location.href = "./highscore.html";
            }
        }, 1000)
    }
    else {
        qEl.textContent = questions[question];
        choices();
    }
}
function choices() {
    for (j = 0; j < 4; j++) {
        chArray[j].innerText = allChoices[question][j];
        chArray[j].value = allChoices[question][j];
        chArray[j].addEventListener('click', checkAns)
    }
}
// Evaluates user response upon button click: displays 'correct' or 'incorrect, updates score and runs the next question.
function checkAns(e) {
    const selectBtn = e.target;
    if (answers.includes(selectBtn.value)) {
        correctResult();
        question++;
        qs();
    }
    else {
        inCorrectResult();
        question++;
        qs();
    }
}
