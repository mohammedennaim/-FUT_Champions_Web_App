const inputs = document.querySelectorAll(".inputs");

const selectElement = document.getElementById("position");
let listPlayers = [];
let arrayInputs = Array.from(inputs);

function validation() {
    const span = document.querySelectorAll(".erreur");
    const tableErreurs = [
        "Name invalid",
        "Photo invalid",
        "Flag invalid",
        "Logo invalid",
        "Position invalid",
        "Nationality invalid",
        "Club invalid",
        "Rating invalid",
        "Pace invalid",
        "Shooting invalid",
        "Passing invalid",
        "Dribbling invalid",
        "Defending invalid",
        "Physical invalid",
    ];
    let valid = false;
    let cmpt = 0;
    for (let i = 0; i < tableErreurs.length; i++) {
        const value = inputs[i].value;
        if (value === "") {
            span[i].innerText = tableErreurs[i];
        } else {
            span[i].innerText = "";
            cmpt++;
        }
    }
    if (cmpt == 14) {
        valid = true;
    }
    return valid;
}

function add() {
    let values = {};

    const valid = validation();
    if (valid) {
        arrayInputs.forEach((input) => {
            values[input.name] = input.value;
        });
        listPlayers.push(values);
        localStorage.setItem("players", JSON.stringify(listPlayers));
        arrayInputs.forEach((input) => {
            input.value = "";
        });
    }
}

function handleSelectChange() {
    let labels = document.querySelectorAll(".label");
    arrayLabel = Array.from(labels);
    formationGK = [
        "rating",
        "diving",
        "handling",
        "kicking",
        "reflexes",
        "speed",
        "positioning",
    ];
    formationJoueurs = [
        "rating",
        "pace",
        "shooting",
        "passing",
        "dribbling",
        "defending",
        "physical",
    ];
    const labelt = arrayLabel.map((label) => label);
    const inputsFormation = Array.from(
        document.querySelectorAll(".formation .inputs")
    );
    const arrayInput = inputsFormation.map((input) => input);

    if (selectElement.value == "Goal Keeper (GK)") {
        for (let i = 1; i < labelt.length; i++) {
            labelt[i].setAttribute("for", formationGK[i]);
            labelt[i].innerText = formationGK[i];
            arrayInput[i].setAttribute("id", formationGK[i]);
            arrayInput[i].setAttribute("name", formationGK[i]);
            arrayInput[i].setAttribute("placeholder", formationGK[i]);
        }
    } else {
        for (let i = 1; i < labelt.length; i++) {
            labelt[i].setAttribute("for", formationJoueurs[i]);
            labelt[i].innerText = formationJoueurs[i];
            arrayInput[i].setAttribute("id", formationJoueurs[i]);
            arrayInput[i].setAttribute("name", formationJoueurs[i]);
            arrayInput[i].setAttribute("placeholder", formationJoueurs[i]);
        }
    }
}

selectElement.addEventListener("change", handleSelectChange);
