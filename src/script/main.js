const inputs = document.querySelectorAll(".inputs");
const selectElement = document.getElementById("position");
const span = document.querySelectorAll(".erreur");
const labels = document.querySelectorAll(".label");
let playesPrincipal = [];
let playesChangement = [];
let arrayInputs = Array.from(inputs);

// windowafficher()


function validation() {
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
        arrayInputs.forEach(input => {
            values[input.name] = input.value;
        })
        if (!playesPrincipal.find(obj => obj.position === values.position)) {
            playesPrincipal.push(values);
        } else {
            playesChangement.push(values)
        }
        localStorage.setItem("playersPrincipal", JSON.stringify(playesPrincipal));
        localStorage.setItem("playersChangement", JSON.stringify(playesChangement));
        arrayInputs.forEach((input) => {
            input.value = "";
        });
    }

    afficherPrincipal();
    afficherChangement();
}

function handleSelectChange() {
    const arrayLabel = Array.from(labels);
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
    const arrLabel = arrayLabel.map((label) => label);
    const inputsFormation = Array.from(
        document.querySelectorAll(".formation .inputs")
    );
    const arrayInput = inputsFormation.map((input) => input);

    if (selectElement.value == "Goal Keeper (GK)") {
        for (let i = 1; i < arrLabel.length; i++) {
            arrLabel[i].setAttribute("for", formationGK[i]);
            arrLabel[i].innerText = formationGK[i];
            arrayInput[i].setAttribute("id", formationGK[i]);
            arrayInput[i].setAttribute("name", formationGK[i]);
            arrayInput[i].setAttribute("placeholder", formationGK[i]);
        }
    } else {
        for (let i = 1; i < arrLabel.length; i++) {
            arrLabel[i].setAttribute("for", formationJoueurs[i]);
            arrLabel[i].innerText = formationJoueurs[i];
            arrayInput[i].setAttribute("id", formationJoueurs[i]);
            arrayInput[i].setAttribute("name", formationJoueurs[i]);
            arrayInput[i].setAttribute("placeholder", formationJoueurs[i]);
        }
    }
}

function afficherChangement() {
    const badgesChangement = Array.from(document.querySelectorAll('.changement .badge'));
    const localChangement = JSON.parse(localStorage.getItem("playersChangement")) || [];
    console.log(localChangement)
    for (let i = 0; i < badgesChangement.length; i++) {
        if (document.querySelectorAll('.changement .position')[i].innerText === "") {

            document.querySelectorAll('.changement .position')[i].innerText = localChangement[i].position;
            document.querySelectorAll('.changement .ratingNum')[i].innerText = localChangement[i].rating;
            document.querySelectorAll('.changement .nameJoueurs')[i].innerText = localChangement[i].name;
            document.querySelectorAll('.changement .shooting')[i].innerText = "SH";
            document.querySelectorAll('.changement .shootingNum')[i].innerText = localChangement[i].shooting;
            document.querySelectorAll('.changement .pace')[i].innerText = "PC";
            document.querySelectorAll('.changement .paceNum')[i].innerText = localChangement[i].pace;
            document.querySelectorAll('.changement .passing')[i].innerText = "PS";
            document.querySelectorAll('.changement .passingNum')[i].innerText = localChangement[i].passing;
            document.querySelectorAll('.changement .dribbling')[i].innerText = "DR";
            document.querySelectorAll('.changement .dribblingNum')[i].innerText = localChangement[i].dribbling;
            document.querySelectorAll('.changement .defending')[i].innerText = "DF";
            document.querySelectorAll('.changement .defendingNum')[i].innerText = localChangement[i].defending;
            document.querySelectorAll('.changement .physical')[i].innerText = "PH";
            document.querySelectorAll('.changement .physicalNum')[i].innerText = localChangement[i].physical
            document.querySelectorAll(".changement .players")[i].setAttribute("src", localChangement[i].photo)
            document.querySelectorAll(".changement .flags")[i].setAttribute("src", localChangement[i].flag)
            document.querySelectorAll(".changement .logo")[i].setAttribute("src", localChangement[i].logo)
        }
    }
}

function afficherPrincipal() {

    const localPrincipal = JSON.parse(localStorage.getItem("playersPrincipal")) || [];
    const badgesTeam = Array.from(document.querySelectorAll('.team .badge'));
    for (let i = 0; i < badgesTeam.length; i++) {
        if (document.querySelector('.gk .position').innerText === "" && localPrincipal[i].position === "GK") {
            document.querySelector('.gk .position').innerText = localPrincipal[i].position;
            document.querySelector('.gk .ratingNum').innerText = localPrincipal[i].rating;

            document.querySelector('.gk .nameJoueurs').innerText = localPrincipal[i].name;

            document.querySelector('.gk .shooting').innerText = "SH";
            document.querySelector('.gk .shootingNum').innerText = localPrincipal[i].shooting;

            document.querySelector('.gk .pace').innerText = "PC";
            document.querySelector('.gk .paceNum').innerText = localPrincipal[i].pace;

            document.querySelector('.gk .passing').innerText = "PS";
            document.querySelector('.gk .passingNum').innerText = localPrincipal[i].passing;

            document.querySelector('.gk .dribbling').innerText = "DR";
            document.querySelector('.gk .dribblingNum').innerText = localPrincipal[i].dribbling;

            document.querySelector('.gk .defending').innerText = "DF";
            document.querySelector('.gk .defendingNum').innerText = localPrincipal[i].defending;

            document.querySelector('.gk .physical').innerText = "PH";
            document.querySelector('.gk .physicalNum').innerText = localPrincipal[i].physical;

            document.querySelector(".gk .players").setAttribute("src", localPrincipal[i].photo)
            document.querySelector(".gk .flags").setAttribute("src", localPrincipal[i].flag)
            document.querySelector(".gk .logo").setAttribute("src", localPrincipal[i].logo)


        } 
         if (localPrincipal[i].position === "LB" && badgesTeam[1].querySelector('.position').innerText === "") {

            document.querySelector('.lb .position').innerText = localPrincipal[i].position;
            document.querySelector('.lb .ratingNum').innerText = localPrincipal[i].rating;

            document.querySelector('.lb .nameJoueurs').innerText = localPrincipal[i].name;

            document.querySelector('.lb .nameJoueurs').innerText = localPrincipal[i].name;

            document.querySelector('.lb .shooting').innerText = "SH";
            document.querySelector('.lb .shootingNum').innerText = localPrincipal[i].shooting;

            document.querySelector('.lb .pace').innerText = "PC";
            document.querySelector('.lb .paceNum').innerText = localPrincipal[i].pace;

            document.querySelector('.lb .passing').innerText = "PS";
            document.querySelector('.lb .passingNum').innerText = localPrincipal[i].passing;

            document.querySelector('.lb .dribbling').innerText = "DR";
            document.querySelector('.lb .dribblingNum').innerText = localPrincipal[i].dribbling;

            document.querySelector('.lb .defending').innerText = "DF";
            document.querySelector('.lb .defendingNum').innerText = localPrincipal[i].defending;

            document.querySelector('.lb .physical').innerText = "PH";
            document.querySelector('.lb .physicalNum').innerText = localPrincipal[i].physical;

            document.querySelector(".lb .players").setAttribute("src", localPrincipal[i].photo)
            document.querySelector(".lb .flags").setAttribute("src", localPrincipal[i].flag)
            document.querySelector(".lb .logo").setAttribute("src", localPrincipal[i].logo)

        }
         if (localPrincipal[i].position === "LCB" && badgesTeam[2].querySelector('.position').innerText === "") {

            document.querySelector('.lcb .position').innerText = localPrincipal[i].position;
            document.querySelector('.lcb .ratingNum').innerText = localPrincipal[i].rating;

            document.querySelector('.lcb .nameJoueurs').innerText = localPrincipal[i].name;

            document.querySelector('.lcb .shooting').innerText = "SH";
            document.querySelector('.lcb .shootingNum').innerText = localPrincipal[i].shooting;

            document.querySelector('.lcb .pace').innerText = "PC";
            document.querySelector('.lcb .paceNum').innerText = localPrincipal[i].pace;

            document.querySelector('.lcb .passing').innerText = "PS";
            document.querySelector('.lcb .passingNum').innerText = localPrincipal[i].passing;

            document.querySelector('.lcb .dribbling').innerText = "DR";
            document.querySelector('.lcb .dribblingNum').innerText = localPrincipal[i].dribbling;

            document.querySelector('.lcb .defending').innerText = "DF";
            document.querySelector('.lcb .defendingNum').innerText = localPrincipal[i].defending;

            document.querySelector('.lcb .physical').innerText = "PH";
            document.querySelector('.lcb .physicalNum').innerText = localPrincipal[i].physical;

            document.querySelector(".lcb .players").setAttribute("src", localPrincipal[i].photo)
            document.querySelector(".lcb .flags").setAttribute("src", localPrincipal[i].flag)
            document.querySelector(".lcb .logo").setAttribute("src", localPrincipal[i].logo)

        }
         if (localPrincipal[i].position === "RCB" && badgesTeam[3].querySelector('.rcb .position').innerText === "") {

            document.querySelector('.rcb .position').innerText = localPrincipal[i].position;
            document.querySelector('.rcb .ratingNum').innerText = localPrincipal[i].rating;

            document.querySelector('.rcb .nameJoueurs').innerText = localPrincipal[i].name;

            document.querySelector('.rcb .shooting').innerText = "SH";
            document.querySelector('.rcb .shootingNum').innerText = localPrincipal[i].shooting;

            document.querySelector('.rcb .pace').innerText = "PC";
            document.querySelector('.rcb .paceNum').innerText = localPrincipal[i].pace;

            document.querySelector('.rcb .passing').innerText = "PS";
            document.querySelector('.rcb .passingNum').innerText = localPrincipal[i].passing;

            document.querySelector('.rcb .dribbling').innerText = "DR";
            document.querySelector('.rcb .dribblingNum').innerText = localPrincipal[i].dribbling;

            document.querySelector('.rcb .defending').innerText = "DF";
            document.querySelector('.rcb .defendingNum').innerText = localPrincipal[i].defending;

            document.querySelector('.rcb .physical').innerText = "PH";
            document.querySelector('.rcb .physicalNum').innerText = localPrincipal[i].physical;

            document.querySelector(".rcb .players").setAttribute("src", localPrincipal[i].photo)
            document.querySelector(".rcb .flags").setAttribute("src", localPrincipal[i].flag)
            document.querySelector(".rcb .logo").setAttribute("src", localPrincipal[i].logo)

        }
         if (localPrincipal[i].position === "RB" && badgesTeam[4].querySelector('.rb .position').innerText === "") {

            document.querySelector('.rb .position').innerText = localPrincipal[i].position;
            document.querySelector('.rb .ratingNum').innerText = localPrincipal[i].rating;

            document.querySelector('.rb .nameJoueurs').innerText = localPrincipal[i].name;

            document.querySelector('.rb .shooting').innerText = "SH";
            document.querySelector('.rb .shootingNum').innerText = localPrincipal[i].shooting;

            document.querySelector('.rb .pace').innerText = "PC";
            document.querySelector('.rb .paceNum').innerText = localPrincipal[i].pace;

            document.querySelector('.rb .passing').innerText = "PS";
            document.querySelector('.rb .passingNum').innerText = localPrincipal[i].passing;

            document.querySelector('.rb .dribbling').innerText = "DR";
            document.querySelector('.rb .dribblingNum').innerText = localPrincipal[i].dribbling;

            document.querySelector('.rb .defending').innerText = "DF";
            document.querySelector('.rb .defendingNum').innerText = localPrincipal[i].defending;

            document.querySelector('.rb .physical').innerText = "PH";
            document.querySelector('.rb .physicalNum').innerText = localPrincipal[i].physical;

            document.querySelector(".rb .players").setAttribute("src", localPrincipal[i].photo)
            document.querySelector(".rb .flags").setAttribute("src", localPrincipal[i].flag)
            document.querySelector(".rb .logo").setAttribute("src", localPrincipal[i].logo)

        }
         if (localPrincipal[i].position === "LCM" && badgesTeam[5].querySelector('.lcm .position').innerText === "") {

            document.querySelector('.lcm .position').innerText = localPrincipal[i].position;
            document.querySelector('.lcm .ratingNum').innerText = localPrincipal[i].rating;

            document.querySelector('.lcm .nameJoueurs').innerText = localPrincipal[i].name;

            document.querySelector('.lcm .shooting').innerText = "SH";
            document.querySelector('.lcm .shootingNum').innerText = localPrincipal[i].shooting;

            document.querySelector('.lcm .pace').innerText = "PC";
            document.querySelector('.lcm .paceNum').innerText = localPrincipal[i].pace;

            document.querySelector('.lcm .passing').innerText = "PS";
            document.querySelector('.lcm .passingNum').innerText = localPrincipal[i].passing;

            document.querySelector('.lcm .dribbling').innerText = "DR";
            document.querySelector('.lcm .dribblingNum').innerText = localPrincipal[i].dribbling;

            document.querySelector('.lcm .defending').innerText = "DF";
            document.querySelector('.lcm .defendingNum').innerText = localPrincipal[i].defending;

            document.querySelector('.lcm .physical').innerText = "PH";
            document.querySelector('.lcm .physicalNum').innerText = localPrincipal[i].physical;

            document.querySelector(".lcm .players").setAttribute("src", localPrincipal[i].photo)
            document.querySelector(".lcm .flags").setAttribute("src", localPrincipal[i].flag)
            document.querySelector(".lcm .logo").setAttribute("src", localPrincipal[i].logo)

        }
         if (localPrincipal[i].position === "RCM" && badgesTeam[6].querySelector('.rcm .position').innerText === "") {

            document.querySelector('.rcm .position').innerText = localPrincipal[i].position;
            document.querySelector('.rcm .ratingNum').innerText = localPrincipal[i].rating;

            document.querySelector('.rcm .nameJoueurs').innerText = localPrincipal[i].name;

            document.querySelector('.rcm .shooting').innerText = "SH";
            document.querySelector('.rcm .shootingNum').innerText = localPrincipal[i].shooting;

            document.querySelector('.rcm .pace').innerText = "PC";
            document.querySelector('.rcm .paceNum').innerText = localPrincipal[i].pace;

            document.querySelector('.rcm .passing').innerText = "PS";
            document.querySelector('.rcm .passingNum').innerText = localPrincipal[i].passing;

            document.querySelector('.rcm .dribbling').innerText = "DR";
            document.querySelector('.rcm .dribblingNum').innerText = localPrincipal[i].dribbling;

            document.querySelector('.rcm .defending').innerText = "DF";
            document.querySelector('.rcm .defendingNum').innerText = localPrincipal[i].defending;

            document.querySelector('.rcm .physical').innerText = "PH";
            document.querySelector('.rcm .physicalNum').innerText = localPrincipal[i].physical;

            document.querySelector(".rcm .players").setAttribute("src", localPrincipal[i].photo)
            document.querySelector(".rcm .flags").setAttribute("src", localPrincipal[i].flag)
            document.querySelector(".rcm .logo").setAttribute("src", localPrincipal[i].logo)

        }
         if (localPrincipal[i].position === "CM" && badgesTeam[7].querySelector('.cm .position').innerText === "") {

            document.querySelector('.cm .position').innerText = localPrincipal[i].position;
            document.querySelector('.cm .ratingNum').innerText = localPrincipal[i].rating;

            document.querySelector('.cm .nameJoueurs').innerText = localPrincipal[i].name;

            document.querySelector('.cm .shooting').innerText = "SH";
            document.querySelector('.cm .shootingNum').innerText = localPrincipal[i].shooting;

            document.querySelector('.cm .pace').innerText = "PC";
            document.querySelector('.cm .paceNum').innerText = localPrincipal[i].pace;

            document.querySelector('.cm .passing').innerText = "PS";
            document.querySelector('.cm .passingNum').innerText = localPrincipal[i].passing;

            document.querySelector('.cm .dribbling').innerText = "DR";
            document.querySelector('.cm .dribblingNum').innerText = localPrincipal[i].dribbling;

            document.querySelector('.cm .defending').innerText = "DF";
            document.querySelector('.cm .defendingNum').innerText = localPrincipal[i].defending;

            document.querySelector('.cm .physical').innerText = "PH";
            document.querySelector('.cm .physicalNum').innerText = localPrincipal[i].physical;

            document.querySelector(".cm .players").setAttribute("src", localPrincipal[i].photo)
            document.querySelector(".cm .flags").setAttribute("src", localPrincipal[i].flag)
            document.querySelector(".cm .logo").setAttribute("src", localPrincipal[i].logo)

        }
         if (localPrincipal[i].position === "RF" && badgesTeam[8].querySelector('.rf .position').innerText === "") {

            document.querySelector('.rf .position').innerText = localPrincipal[i].position;
            document.querySelector('.rf .ratingNum').innerText = localPrincipal[i].rating;

            document.querySelector('.rf .nameJoueurs').innerText = localPrincipal[i].name;

            document.querySelector('.rf .shooting').innerText = "SH";
            document.querySelector('.rf .shootingNum').innerText = localPrincipal[i].shooting;

            document.querySelector('.rf .pace').innerText = "PC";
            document.querySelector('.rf .paceNum').innerText = localPrincipal[i].pace;

            document.querySelector('.rf .passing').innerText = "PS";
            document.querySelector('.rf .passingNum').innerText = localPrincipal[i].passing;

            document.querySelector('.rf .dribbling').innerText = "DR";
            document.querySelector('.rf .dribblingNum').innerText = localPrincipal[i].dribbling;

            document.querySelector('.rf .defending').innerText = "DF";
            document.querySelector('.rf .defendingNum').innerText = localPrincipal[i].defending;

            document.querySelector('.rf .physical').innerText = "PH";
            document.querySelector('.rf .physicalNum').innerText = localPrincipal[i].physical;

            document.querySelector(".rf .players").setAttribute("src", localPrincipal[i].photo)
            document.querySelector(".rf .flags").setAttribute("src", localPrincipal[i].flag)
            document.querySelector(".rf .logo").setAttribute("src", localPrincipal[i].logo)

        }
         if (localPrincipal[i].position === "LW" && badgesTeam[9].querySelector('.lw .position').innerText === "") {

            document.querySelector('.lw .position').innerText = localPrincipal[i].position;
            document.querySelector('.lw .ratingNum').innerText = localPrincipal[i].rating;

            document.querySelector('.lw .nameJoueurs').innerText = localPrincipal[i].name;

            document.querySelector('.lw .shooting').innerText = "SH";
            document.querySelector('.lw .shootingNum').innerText = localPrincipal[i].shooting;

            document.querySelector('.lw .pace').innerText = "PC";
            document.querySelector('.lw .paceNum').innerText = localPrincipal[i].pace;

            document.querySelector('.lw .passing').innerText = "PS";
            document.querySelector('.lw .passingNum').innerText = localPrincipal[i].passing;

            document.querySelector('.lw .dribbling').innerText = "DR";
            document.querySelector('.lw .dribblingNum').innerText = localPrincipal[i].dribbling;

            document.querySelector('.lw .defending').innerText = "DF";
            document.querySelector('.lw .defendingNum').innerText = localPrincipal[i].defending;

            document.querySelector('.lw .physical').innerText = "PH";
            document.querySelector('.lw .physicalNum').innerText = localPrincipal[i].physical;
            document.querySelector(".lw .players").setAttribute("src", localPrincipal[i].photo)
            document.querySelector(".lw .flags").setAttribute("src", localPrincipal[i].flag)
            document.querySelector(".lw .logo").setAttribute("src", localPrincipal[i].logo)

        }
         if (localPrincipal[i].position === "ST" && badgesTeam[10].querySelector('.st .position').innerText === "") {

            document.querySelector('.st .position').innerText = localPrincipal[i].position;
            document.querySelector('.st .ratingNum').innerText = localPrincipal[i].rating;

            document.querySelector('.st .nameJoueurs').innerText = localPrincipal[i].name;

            document.querySelector('.st .shooting').innerText = "SH";
            document.querySelector('.st .shootingNum').innerText = localPrincipal[i].shooting;

            document.querySelector('.st .pace').innerText = "PC";
            document.querySelector('.st .paceNum').innerText = localPrincipal[i].pace;

            document.querySelector('.st .passing').innerText = "PS";
            document.querySelector('.st .passingNum').innerText = localPrincipal[i].passing;

            document.querySelector('.st .dribbling').innerText = "DR";
            document.querySelector('.st .dribblingNum').innerText = localPrincipal[i].dribbling;

            document.querySelector('.st .defending').innerText = "DF";
            document.querySelector('.st .defendingNum').innerText = localPrincipal[i].defending;

            document.querySelector('.st .physical').innerText = "PH";
            document.querySelector('.st .physicalNum').innerText = localPrincipal[i].physical;

            document.querySelector(".st .players").setAttribute("src", localPrincipal[i].photo)
            document.querySelector(".st .flags").setAttribute("src", localPrincipal[i].flag)
            document.querySelector(".st .logo").setAttribute("src", localPrincipal[i].logo)

        }
    }

}

document.addEventListener("DOMContentLoaded", () => {

    afficherChangement();
    afficherPrincipal();
})