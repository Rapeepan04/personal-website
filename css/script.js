let randomNumber = Math.floor(Math.random() * 100) + 1;

let score = 0;

function checkNumber() {

    let userGuess = document.getElementById("guess").value;

    userGuess = Number(userGuess);

    let result = document.getElementById("result");

    if (userGuess === 0 || isNaN(userGuess)) {
        result.innerHTML = "Please enter a number";
        return;
    }

    if (userGuess < 1 || userGuess > 100) {
        result.innerHTML = "Enter number between 1 - 100";
        return;
    }

    if (userGuess === randomNumber) {

        result.innerHTML = "Correct! New number generated";

        score++;

        document.getElementById("score").innerHTML =
            "Score: " + score;

        randomNumber = Math.floor(Math.random() * 100) + 1;

        document.getElementById("guess").value = "";
    } else if (userGuess > randomNumber) {

        result.innerHTML = "Too High";
    } else {

        result.innerHTML = "Too Low";
    }
}

function resetGame() {

    randomNumber = Math.floor(Math.random() * 100) + 1;

    score = 0;

    document.getElementById("score").innerHTML = "Score: 0";

    document.getElementById("result").innerHTML = "Game Reset";

    document.getElementById("guess").value = "";
}
