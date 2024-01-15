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
startButton.addEventListener("click", function() {
    introEl.textContent = '';
    msgEl.textContent = '';
    sButtonDiv.removeChild(startButton);

    startTimer();
})

let givenTime = 60;
function startTimer() {
    let timer = setInterval (function() {
        givenTime--;
        if(givenTime < 0) {
            clearInterval(timer);
        } else {
            timerEl.textContent = givenTime;
        }

    }, 1000)

    startQuiz();
}

// displays result: correct/incorrect for 3 secs. 
let resultTime = 3;
function correctResult() {
    let correctTimer = setInterval (function() {
        resultTime--;
        if(resultTime === 0) {
            clearInterval(correctTimer);
            resultEl.textContent = '';
        } else {
            resultEl.textContent = "Correct!";
        }
    }, 1000)
}

function inCorrectResult() {
    let inCorrectTimer = setInterval (function() {
        resultTime--;
        if(resultTime === 0) {
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
    const questions = 
    ["1. Trivia question: The concept of gravity was discovered by which famous physicist?",
     "2. Trivia question: Which is the most abundant element in the universe?",
     "3. Trivia question: What is the only planet that spins clockwise?",
     "4. Trivia question: How many bones do sharks have in their bodies?",
     "5. Trivia question: What is the heaviest organ in the human body?"];

     // array containing all answers.
     const answers = ["Sir Isaac Newton", "Hydrogen", "Venus", "0", "Liver"];

     // array containing all choices to question 1.
     const q1Choices = ["Albert Einstein", "Sir Isaac Newton",  "Galileo Galilei", "Stephen Hawking"];

     // array containing all choices to question 2.
     const q2Choices = ["Hydrogen", "Carbon","Oxygen", "Nitrogen"];

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
     ch1El.appendChild(chButton1);
     ch2El.appendChild(chButton2);
     ch3El.appendChild(chButton3);
     ch4El.appendChild(chButton4);
     
     const chButtons = [chButton1, chButton2, chButton3, chButton4]
     
     q1(); 
     
     
     
     function q1() {
         // add text to question/h2 element.
         qEl.textContent = questions[0];
     
         // add text to choice buttons.
         chButton1.textContent = q1Choices[0];
         chButton2.textContent = q1Choices[1];
         chButton3.textContent = q1Choices[2];
         chButton4.textContent = q1Choices[3];

         chButtons[0].addEventListener("click", function() {
        if (answers.includes(q1Choices[0])) {
            correctResult();
        } else { 
            inCorrectResult();
            givenTime = givenTime - 10;
        }
        q2();
    })

    chButtons[1].addEventListener("click", function() {
        if (answers.includes(q1Choices[1])) {
            correctResult();
        } else { 
            inCorrectResult();
            givenTime = givenTime - 10;
        }
        q2();
    })

    chButtons[2].addEventListener("click", function() {
        if (answers.includes(q1Choices[2])) {
            correctResult();
        } else { 
            inCorrectResult();
            givenTime = givenTime - 10;
        }
        q2();
    })

    chButtons[3].addEventListener("click", function() {
        if (answers.includes(q1Choices[3])) {
            correctResult();
        } else { 
            inCorrectResult();
            givenTime = givenTime - 10;
        }
        q2();  
    })
}

// question 2 --------------------------------------
function q2() {
    qEl.textContent = questions[1];

    // add text to choice buttons.
    chButton1.textContent = q2Choices[0];
    chButton2.textContent = q2Choices[1];
    chButton3.textContent = q2Choices[2];
    chButton4.textContent = q2Choices[3];

    chButtons[0].addEventListener("click", function() {
        if (answers.includes(q2Choices[0])) {
            correctResult();
        } else { 
            inCorrectResult();
            givenTime = givenTime - 10;
        }
        q3();
    })

    chButtons[1].addEventListener("click", function() {
        if (answers.includes(q2Choices[1])) {
            correctResult();
        } else { 
            inCorrectResult();
            givenTime = givenTime - 10;
        }
        q3();
    })

    chButtons[2].addEventListener("click", function() {
        if (answers.includes(q2Choices[2])) {
            correctResult();
        } else { 
            inCorrectResult();
            givenTime = givenTime - 10;
        }
        q3();
    })

    chButtons[3].addEventListener("click", function() {
        if (answers.includes(q2Choices[3])) {
            correctResult();
        } else { 
            inCorrectResult();
            givenTime = givenTime - 10;
        }
        q3();  
    })
}

// question 3 --------------------------------------
function q3() {
    qEl.textContent = questions[2];

    // add text to choice buttons.
    chButton1.textContent = q3Choices[0];
    chButton2.textContent = q3Choices[1];
    chButton3.textContent = q3Choices[2];
    chButton4.textContent = q3Choices[3];

    chButtons[0].addEventListener("click", function() {
        if (answers.includes(q2Choices[0])) {
            correctResult();
        } else { 
            inCorrectResult();
            givenTime = givenTime - 10;
        }
        q4();
    })

    chButtons[1].addEventListener("click", function() {
        if (answers.includes(q3Choices[1])) {
            correctResult();
        } else { 
            inCorrectResult();
            givenTime = givenTime - 10;
        }
        q4();
    })

    chButtons[2].addEventListener("click", function() {
        if (answers.includes(q3Choices[2])) {
            correctResult();
        } else { 
            inCorrectResult();
            givenTime = givenTime - 10;
        }
        q4();
    })

    chButtons[3].addEventListener("click", function() {
        if (answers.includes(q3Choices[3])) {
            correctResult();
        } else { 
            inCorrectResult();
            givenTime = givenTime - 10;
        }
        q4();  
    })
}

// question 4 --------------------------------------
function q4() {
    qEl.textContent = questions[3];

    // add text to choice buttons.
    chButton1.textContent = q4Choices[0];
    chButton2.textContent = q4Choices[1];
    chButton3.textContent = q4Choices[2];
    chButton4.textContent = q4Choices[3];

    chButtons[0].addEventListener("click", function() {
        if (answers.includes(q4Choices[0])) {
            correctResult();
        } else { 
            inCorrectResult();
            givenTime = givenTime - 10;
        }
        q5();
    })

    chButtons[1].addEventListener("click", function() {
        if (answers.includes(q4Choices[1])) {
            correctResult();
        } else { 
            inCorrectResult();
            givenTime = givenTime - 10;
        }
        q5();
    })

    chButtons[2].addEventListener("click", function() {
        if (answers.includes(q4Choices[2])) {
            correctResult();
        } else { 
            inCorrectResult();
            givenTime = givenTime - 10;
        }
        q5();
    })

    chButtons[3].addEventListener("click", function() {
        if (answers.includes(q4Choices[3])) {
            correctResult();
        } else { 
            inCorrectResult();
            givenTime = givenTime - 10;
        }
        q5();  
    })
}

// question 5 --------------------------------------
function q5() {
    qEl.textContent = questions[4];

    // add text to choice buttons.
    chButton1.textContent = q5Choices[0];
    chButton2.textContent = q5Choices[1];
    chButton3.textContent = q5Choices[2];
    chButton4.textContent = q5Choices[3];

    chButtons[0].addEventListener("click", function() {
        if (answers.includes(q5Choices[0])) {
            correctResult();
        } else { 
            inCorrectResult();
            givenTime = givenTime - 10;
        }
        
    })

    chButtons[1].addEventListener("click", function() {
        if (answers.includes(q5Choices[1])) {
            correctResult();
        } else { 
            inCorrectResult();
            givenTime = givenTime - 10;
        }
        
    })

    chButtons[2].addEventListener("click", function() {
        if (answers.includes(q5Choices[2])) {
            correctResult();
        } else { 
            inCorrectResult();
            givenTime = givenTime - 10;
        }
        
    })

    chButtons[3].addEventListener("click", function() {
        if (answers.includes(q5Choices[3])) {
            correctResult();
        } else { 
            inCorrectResult();
            givenTime = givenTime - 10;
        }
         
    })
}



}





