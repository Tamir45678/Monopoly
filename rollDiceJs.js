

function rollDice() {
    const dice = [...document.querySelectorAll(".die-list")];
    dice.forEach(die => {
        toggleClasses(die);
        diceNumber = getRandomNumber(1, 6);
        die.dataset.roll = diceNumber;
    });
        return diceNumber;
}


function toggleClasses(die) {
    die.classList.toggle("odd-roll");
    die.classList.toggle("even-roll");
}

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
