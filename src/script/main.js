const inputs = document.querySelectorAll(".inputs");

const selectElement = document.getElementById("position");
let listPlayers = [];
let arrayInputs = Array.from(inputs);
afficherJoueurs()
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
    afficherJoueurs();
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

function afficherJoueurs() {
    // const badge = document.querySelectorAll('.badge')
    // const arrayBadge = Array.from(badge)
    const locals = JSON.parse(localStorage.getItem("players"))

    locals.forEach(local => {
        if (selectElement[1].value === local.position) {
            for (let i = 0; i < document.querySelectorAll('.rating').length; i++) {
                document.querySelectorAll('.rating')[i].innerText = local.position;
                document.querySelectorAll('.ratingNum')[i].innerText = local.rating;
    
                document.querySelectorAll('.pos')[i].innerText = local.rating;
                document.querySelectorAll('.posNum')[i].innerText = local.rating;
    
                document.querySelectorAll('.shooting')[i].innerText = local.shooting;
                document.querySelectorAll('.shootingNum')[i].innerText = local.shooting;
    
                document.querySelectorAll('.pace')[i].innerText = local.pace;
                document.querySelectorAll('.paceNum')[i].innerText = local.pace;
    
                document.querySelectorAll('.passing')[i].innerText = local.passing;
                document.querySelectorAll('.passingNum')[i].innerText = local.passing;
    
                document.querySelectorAll('.dribbling')[i].innerText = local.dribbling;
                document.querySelectorAll('.dribblingNum')[i].innerText = local.dribbling;
    
                document.querySelectorAll('.defending')[i].innerText = local.defending;
                document.querySelectorAll('.defendingNum')[i].innerText = local.defending;
    
                document.querySelectorAll('.physical')[i].innerText = local.physical;
                document.querySelectorAll('.physicalNum')[i].innerText = local.physical;
                
            } 
            
            
            // document.querySelector('#player').setAttribute("src", local.photo)
            // badge.querySelector('img').setAttribute("src", local.photo)
            // badge.querySelector('img').setAttribute("src", local.photo)
            // badge.querySelector('img').setAttribute("src", local.photo)
        }
    })

}
// window.onload(afficherJoueurs())
