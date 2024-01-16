const introEl = document.querySelector(".intro");
const msgEl = document.querySelector(".message");
const sButtonDiv = document.querySelector(".startButton");

const qEl = document.querySelector(".question");
const ch1El = document.querySelector(".choice1");
const ch2El = document.querySelector(".choice2");
const ch3El = document.querySelector(".choice3");
const ch4El = document.querySelector(".choice4");

const resultEl = document.querySelector(".result");

let timerEl = document.querySelector(".timer");

// adds text content to h1 and p tags
introEl.textContent = " Intro to Quiz";
msgEl.textContent = "Message explaining rules";

// creates start button
let startButton = document.createElement("button");
startButton.textContent = "START";
sButtonDiv.appendChild(startButton);

// adds event listener to start button
startButton.addEventListener("click", function () {
    introEl.textContent = '';
    msgEl.textContent = '';
    sButtonDiv.removeChild(startButton);

    startTimer();
})

let givenTime = 60;
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
            resultEl.textContent = '';
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
            resultEl.textContent = '';
        } else {
            resultEl.textContent = "Incorrect";
        }
    }, 1000)
}

// sets up quiz.
function startQuiz() {
    // givenTime = givenTime - 10;

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

    // create new button elements to show choices.
    let chButton1 = document.createElement("button");
    let chButton2 = document.createElement("button");
    let chButton3 = document.createElement("button");
    let chButton4 = document.createElement("button");


    // append choice buttons.

    const chButtons = [chButton1, chButton2, chButton3, chButton4]

    ch1El.appendChild(chButton1);
    ch2El.appendChild(chButton2);
    ch3El.appendChild(chButton3);
    ch4El.appendChild(chButton4);

    // first value always identifies the answer.
    q1(1, 2, 0, 3,);

    function q1(A, B, C, D) {
        // add text to question/h2 element.
        qEl.textContent = questions[0];

        // add text to choice buttons.
        for (i = 0; i < 4; i++) {
            chButtons[i].textContent = q1Choices[i];
        }

        chButtons[A].addEventListener("click", function () {
            correctResult();
            q2(0, 1, 2, 3,);
        })

        chButtons[B].addEventListener("click", function () {
            inCorrectResult();
            q2(0, 1, 2, 3,);
        })

        chButtons[C].addEventListener("click", function () {
            inCorrectResult();
            q2(0, 1, 2, 3,);
        })

        chButtons[D].addEventListener("click", function () {
            inCorrectResult();
            q2(0, 1, 2, 3,);
        })
    }

    function q2(A, B, C, D) {
        // add text to question/h2 element.
        qEl.textContent = questions[1];

        // add text to choice buttons.
        for (i = 0; i < 4; i++) {
            chButtons[i].textContent = q2Choices[i];
        }

        chButtons[A].addEventListener("click", function () {
            correctResult();
            q3(3, 0, 1, 2,);
        })

        chButtons[B].addEventListener("click", function () {
            inCorrectResult();
            q3(3, 0, 1, 2,);
        })

        chButtons[C].addEventListener("click", function () {
            inCorrectResult();
            q3(3, 0, 1, 2,);
        })

        chButtons[D].addEventListener("click", function () {
            inCorrectResult();
            q3(3, 0, 1, 2,);
        })
    }

    function q3(A, B, C, D) {
        // add text to question/h2 element.
        qEl.textContent = questions[2];

        // add text to choice buttons.
        for (i = 0; i < 4; i++) {
            chButtons[i].textContent = q3Choices[i];
        }

        chButtons[A].addEventListener("click", function () {
            correctResult();
            q4(0, 1, 2, 3);
        })

        chButtons[B].addEventListener("click", function () {
            inCorrectResult();
            q4(0, 1, 2, 3);
        })

        chButtons[C].addEventListener("click", function () {
            inCorrectResult();
            q4(0, 1, 2, 3);
        })

        chButtons[D].addEventListener("click", function () {
            inCorrectResult();
            q4(0, 1, 2, 3);
        })
    }

    function q4(A, B, C, D) {
        // add text to question/h2 element.
        qEl.textContent = questions[3];

        // add text to choice buttons.
        for (i = 0; i < 4; i++) {
            chButtons[i].textContent = q4Choices[i];
        }

        chButtons[A].addEventListener("click", function () {
            correctResult();
            q5(1, 0, 2, 3);
        })

        chButtons[B].addEventListener("click", function () {
            inCorrectResult();
            q5(1, 0, 2, 3);
        })

        chButtons[C].addEventListener("click", function () {
            inCorrectResult();
            q5(1, 0, 2, 3);
        })

        chButtons[D].addEventListener("click", function () {
            inCorrectResult();
            q5(1, 0, 2, 3);
        })
    }

    function q5(A, B, C, D) {
        // add text to question/h2 element.
        qEl.textContent = questions[4];

        // add text to choice buttons.
        for (i = 0; i < 4; i++) {
            chButtons[i].textContent = q5Choices[i];
        }

        chButtons[A].addEventListener("click", function () {
            correctResult();
            //q5(1, 0, 2, 3);
        })

        chButtons[B].addEventListener("click", function () {
            inCorrectResult();
            //q5(1, 0, 2, 3);
        })

        chButtons[C].addEventListener("click", function () {
            inCorrectResult();
            //q5(1, 0, 2, 3);
        })

        chButtons[D].addEventListener("click", function () {
            inCorrectResult();
            //q5(1, 0, 2, 3);
        })
    }

}

