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
const questions = ["1. Trivia question: The concept of gravity was discovered by which famous physicist?",
    "2. Trivia question: Which is the most abundant element in the universe?",
    "3. Trivia question: What is the only planet that spins clockwise?",
    "4. Trivia question: How many bones do sharks have in their bodies?",
    "5. Trivia question: What is the heaviest organ in the human body?"];

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
// displays result if wrong for 3 secs. 
function inCorrectResult() {
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

// sets up quiz.
function startQuiz() {

    for (i = 0; i < 4; i++) {
        chArray[i].classList.remove('hide');
    }

    q1();
}

//question 1
function q1() {
    // add text to question/h2 element.
    qEl.textContent = questions[0];

    // add text, values, and event listeners to choice buttons.
    //evaluates user response. This is repeated for all questions.
    for (i = 0; i < 4; i++) {
        chArray[i].innerText = q1Choices[i];
        chArray[i].value = q1Choices[i];
        chArray[i].addEventListener('click', function (e) {
            const selectBtn = e.target;
            if (answers.includes(selectBtn.value)) {
                correctResult();
                q2();
            } else {
                givenTime = givenTime - 10;
                inCorrectResult();
                q2();
            }
        })
    }
}

//question 2
function q2() {
    // add text to question/h2 element.
    qEl.textContent = questions[1];

    // add text to choice buttons.
    for (i = 0; i < 4; i++) {
        chArray[i].innerText = q2Choices[i];
        chArray[i].value = q2Choices[i];
        chArray[i].addEventListener('click', function (e) {
            const selectBtn = e.target;
            if (answers.includes(selectBtn.value)) {
                correctResult();
                q3();
            } else {
                givenTime = givenTime - 10;
                inCorrectResult();
                q3();
            }
        })
    }
}

//question 3
function q3() {
    // add text to question/h2 element.
    qEl.textContent = questions[2];

    // add text to choice buttons.
    for (i = 0; i < 4; i++) {
        chArray[i].innerText = q3Choices[i];
        chArray[i].value = q3Choices[i];
        chArray[i].addEventListener('click', function (e) {
            const selectBtn = e.target;
            if (answers.includes(selectBtn.value)) {
                correctResult();
                q4();
            } else {
                givenTime = givenTime - 10;
                inCorrectResult();
                q4();
            }
        })
    }
}

//question 4
function q4() {
    // add text to question/h2 element.
    qEl.textContent = questions[3];

    // add text to choice buttons.
    for (i = 0; i < 4; i++) {
        chArray[i].innerText = q4Choices[i];
        chArray[i].value = q4Choices[i];
        chArray[i].addEventListener('click', function (e) {
            const selectBtn = e.target;
            if (answers.includes(selectBtn.value)) {
                correctResult();
                q5();
            } else {
                givenTime = givenTime - 10;
                inCorrectResult();
                q5();
            }
        })
    }
}

//question 5
function q5() {
    // add text to question/h2 element.
    qEl.textContent = questions[4];

    // add text to choice buttons.
    for (i = 0; i < 4; i++) {
        chArray[i].innerText = q5Choices[i];
        chArray[i].value = q5Choices[i];
        chArray[i].addEventListener('click', function (e) {
            const selectBtn = e.target;
            if (answers.includes(selectBtn.value)) {
                correctResult();
                //console.log(givenTime);
                end();
            } else {
                givenTime = givenTime - 10;
                inCorrectResult();
                //console.log(givenTime);
                end();
            }
        })
    }
}

//end of quiz. jumps to second html page.
function end() {
    window.location.href = "./highscore.html";
}

const headingDiv = document.querySelector('.container3');

const initialsInput = document.querySelector("#initials-text");
const subminForm = document.querySelector("#submit-form");
const scoreList = document.querySelector("#score-list");

let scores = [];

// displays scores
function renderScores() {
    
    //adds contents to list items.
    scoreList.innerHTML = "";

    //creates a list item each time a new score is added
    for (let i = 0; i < scores.length; i++) {
        const score = scores[i];

        const li = document.createElement("li");
        li.textContent = score;
        li.setAttribute("data-index", i);

        scoreList.appendChild(li);
    }
}


function init() {
    //gets stored value from local storage.
    const storedScores = JSON.parse(localStorage.getItem("scores"));
    // only evaluates if local storage has values stored.
    if (storedScores !== null) {
        scores = storedScores;
    }

    renderScores();
}

function storeScores() {
    //sends scores into local storage.
    localStorage.setItem("scores", JSON.stringify(scores));
}

//adds event listener to form submission.
subminForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const scoreText = scoreInput.value.trim();

    if (scoreText === "") {
        return;
    }
    //sends va;ues to the scores array
    scores.push(scoreText);
    scoreInput.value = "";

    storeScores();
    renderScores();
});


scoreList.addEventListener("click", function (e) {
    const element = e.target;

    if (element.matches("button") === true) {
        const index = element.parentElement.getAttribute("data-index");
        scores.splice(index, 1);

        storeScores();
        renderScores();
    }
});

init();
