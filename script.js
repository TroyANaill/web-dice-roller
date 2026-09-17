let heldDice = [false, false, false, false, false];
let rollCount = 0;

function rollDice() {

    rollCount++;

    for (let i = 0; i < 5; i++) {

        if (heldDice[i] === false) {

            let roll = Math.floor(Math.random() * 6) + 1;

            document.getElementById("die" + (i + 1)).value = roll;
        }
    }

    document.getElementById("rollCount").textContent = rollCount;
}

function toggleHold(dieNumber) {

    let index = dieNumber - 1;

    heldDice[index] = !heldDice[index];

    let die = document.getElementById("dieContainer" + dieNumber);
    let holdText = document.getElementById("hold" + dieNumber);

    if (heldDice[index]) {
        die.classList.add("held");
        holdText.textContent = "HELD";
    } else {
        die.classList.remove("held");
        holdText.textContent = "Click to Hold";
    }
}

function newTurn() {

    heldDice = [false, false, false, false, false];
    rollCount = 0;

    for (let i = 1; i <= 5; i++) {
        document.getElementById("dieContainer" + i).classList.remove("held");
        document.getElementById("hold" + i).textContent = "Click to Hold";
    }

    rollDice();

    document.getElementById("rollButton").focus();
}

