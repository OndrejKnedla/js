// basic transformations
var totalScore, roundScore, activePlayer, dice, playGame;

newStart();

function newStart() {
    totalScore = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    playGame = true;

    //resetting...
    document.getElementById("totalScorePlayer-0").textContent = 0;
    document.getElementById("totalScorePlayer-1").textContent = 0;
    document.getElementById("currentScore-0").textContent = 0;
    document.getElementById("currentScore-1").textContent = 0;

    //hidden dice
    document.querySelector(".diceImage").style.display = "none";


    document.querySelector("#name-0").textContent = "Skóre 1. hráče";
    document.querySelector("#name-1").textContent = "Skóre 2. hráče";

    //we will return the active player to the first one and remove the second one
    document.querySelector(".totalScore0").classList.add("active");
    document.querySelector(".totalScore1").classList.remove("active");


}

document.querySelector(".newGame").addEventListener("click", newStart);


document.querySelector(".rollDice").addEventListener("click", function() {
    if (playGame) {
        //1. generate a random number between 1-6
        var dice = Math.ceil(Math.random() * 6);

        //2. show correct image
        var diceElement = document.querySelector(".diceImage");
        diceElement.style.display = "block"
        console.log(diceElement.src = "img/" + dice + ".jpg");

        //3. add the number from the cube
        if (dice !== 1) {
            roundScore = roundScore + dice;
            document.getElementById("currentScore-" + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }
});

function nextPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }

    roundScore = 0;

    document.getElementById("currentScore-0").textContent = 0;
    document.getElementById("currentScore-1").textContent = 0;

    document.querySelector(".diceImage").style.display = "none";

    document.querySelector(".totalScore0").classList.toggle("active");
    document.querySelector(".totalScore1").classList.toggle("active");

}

document.querySelector(".holdScore").addEventListener("click", function() {
    if (playGame) {
        // the total score is filled by the current score
        totalScore[activePlayer] = totalScore[activePlayer] + roundScore;

        //

        document.querySelector("#totalScorePlayer-" + activePlayer).textContent =
            totalScore[activePlayer]

        if (totalScore[activePlayer] >= 100) {
            document.querySelector("#name-" + activePlayer).textContent = "Vítěz vítež!";
            document.querySelector(".diceImage").style.display = "none";
            playGame = false;
        } else {
            nextPlayer();
        }
    }

});