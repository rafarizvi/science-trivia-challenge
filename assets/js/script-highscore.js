// const headingDiv = document.querySelector('.container3');
const cardEl = document.querySelector('.card');

const scoreEl = document.querySelector("#score");
const initialsInput = document.querySelector("#initials-text");
const scoreList = document.querySelector("#score-list");
const saveButton = document.querySelector("#save-button");
const clearButton = document.querySelector("#clear-button");

//gets latest score from local storage.
const time = JSON.parse(localStorage.getItem("time"));

let scores = [];
let names = [];

// displays scores
function renderScores() {

    //adds contents to list items.
    scoreList.innerHTML = "";

    //creates a list item each time a new score is added
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const score = scores[i];

        const li = document.createElement("li");
        li.textContent = `${name} ....... ${score}`;
        // li.setAttribute("data-index", i);

        scoreList.appendChild(li);
    }
}


function init() {
    //gets stored value from local storage.
    const storedNames = JSON.parse(localStorage.getItem("names"));
    const storedScores = JSON.parse(localStorage.getItem("scores"));

    scoreEl.textContent = `You scored ${time}`

    // only evaluates if local storage has values stored.
    if (storedNames !== null && storedScores !== null) {
        names = storedNames;
        scores = storedScores;
    }

    renderScores();
}

function storeScores() {
    //sends scores and names into local storage.
    localStorage.setItem("names", JSON.stringify(names));
    localStorage.setItem("scores", JSON.stringify(scores));
}

//adds event listener to form submission.
saveButton.addEventListener("click", function (e) {
    e.preventDefault();
    const nameText = initialsInput.value.trim().toUpperCase();

    if (nameText === "") {
        return;
    }
    // pushes latest score/time to scores array. 
    scores.push(time);

    //sends user name/initial to names array.
    names.push(nameText);
    initialsInput.value = "";

    storeScores();
    renderScores();
});

// Clears score list.
clearButton.addEventListener("click", function() {
    localStorage.removeItem("names");
    localStorage.removeItem("scores");
    renderScores();
})

init();
