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


// global variables.
let score = 0;

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

// starts timer
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

// displays result: correct/incorrect for 3 secs. 
function correctResult() {
    let time1 = 3;
    let correctTimer = setInterval(function () {
        time1--;
        if (time1 === 0) {
            clearInterval(correctTimer);
            resultEl.textContent ='';
        } else {
            resultEl.textContent = "Correct!";
        }
    }, 1000)
}

function inCorrectResult() {
    let time2 = 3;
    let inCorrectTimer = setInterval(function () {
        time2--;
        if (time2 === 0) {
            clearInterval(inCorrectTimer);
            resultEl.textContent ='';
        } else {
            resultEl.textContent = "Wrong :(";
        }
    }, 1000)
}

// sets up quiz.
function startQuiz() {

    q1();

    // givenTime = givenTime - 10;    
}

function q1() {
    // add text to question/h2 element.
    qEl.textContent = questions[0];

    // add text to choice buttons.

    for (i = 0; i < 4; i++) {
        chArray[i].innerText = q1Choices[i];
        chArray[i].value = q1Choices[i];
        chArray[i].addEventListener('click', function(e){
            const selectBtn = e.target;
            if (answers.includes(selectBtn.value)) {
            correctResult();
            countScore();
            q2();
            } else {
            inCorrectResult();
            givenTime = givenTime - 10;
            q2();
            } 
        })
    }
}

function q2() {
        // add text to question/h2 element.
        qEl.textContent = questions[1];

        // add text to choice buttons.
        for (i = 0; i < 4; i++) {
            chArray[i].innerText = q2Choices[i];
            chArray[i].value = q2Choices[i];
            chArray[i].addEventListener('click', function(e){
                const selectBtn = e.target;
                if (answers.includes(selectBtn.value)) {
                correctResult();
                countScore();
                q3();
                } else {
                inCorrectResult();
                givenTime = givenTime - 10;
                q3();
                }
            })
        } 
    }

    function q3() {
        // add text to question/h2 element.
        qEl.textContent = questions[2];

        // add text to choice buttons.
        for (i = 0; i < 4; i++) {
            chArray[i].innerText = q3Choices[i];
            chArray[i].value = q3Choices[i];
            chArray[i].addEventListener('click', function(e){
                const selectBtn = e.target;
                if (answers.includes(selectBtn.value)) {
                correctResult();
                countScore();
                q4();
                } else {
                inCorrectResult();
                givenTime = givenTime - 10;
                q4();
                }
            })
        } 
    }
    
    function q4() {
        // add text to question/h2 element.
        qEl.textContent = questions[3];

        // add text to choice buttons.
        for (i = 0; i < 4; i++) {
            chArray[i].innerText = q4Choices[i];
            chArray[i].value = q4Choices[i];
            chArray[i].addEventListener('click', function(e){
                const selectBtn = e.target;
                if (answers.includes(selectBtn.value)) {
                correctResult();
                countScore();
                q5();
                } else {
                inCorrectResult();
                givenTime = givenTime - 10;
                q5();
                }
            })
        } 
    }

    function q5() {
        // add text to question/h2 element.
        qEl.textContent = questions[4];

        // add text to choice buttons.
        for (i = 0; i < 4; i++) {
            chArray[i].innerText = q5Choices[i];
            chArray[i].value = q5Choices[i];
            chArray[i].addEventListener('click', function(e){
                const selectBtn = e.target;
                if (answers.includes(selectBtn.value)) {
                correctResult();
                countScore();
                q5();
                } else {
                inCorrectResult();
                givenTime = givenTime - 10;
                q5();
                }
            })
        } 
    }

function selectAnswer(e) {
    const selectBtn = e.target;
    if (answers.includes(selectBtn.value)) {
      correctResult();
      q2();

    } else {
      inCorrectResult();
      q2();
    } 
}

function countScore() {
    score++;
    console.log(score*10);
}

