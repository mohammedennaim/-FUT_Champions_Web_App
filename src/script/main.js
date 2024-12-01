const inputs = document.querySelectorAll(".inputs");
const selectElement = document.getElementById("position");
const span = document.querySelectorAll(".erreur");
let labels = document.querySelectorAll(".label");

let listPlayers = [];
let arrayInputs = Array.from(inputs);
document.addEventListener('DOMContentLoaded', afficherJoueurs())
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
        for (let i = 0; i < arrayInputs.length; i++) {
            values[arrayInputs[i].name] = arrayInputs[i].value;
        }
        listPlayers.push(values);
        localStorage.setItem("players", JSON.stringify(listPlayers));
        arrayInputs.forEach((input) => {
            input.value = "";
        });
    }
    afficherJoueurs();
}

function handleSelectChange() {
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

function afficherJoueurs() {
    const locals = JSON.parse(localStorage.getItem("players"))
    console.log(locals)

    const badgesTeam = Array.from(document.querySelectorAll('.team .badge'));
    for (let i = 0; i < badgesTeam.length; i++) {
        if (locals[i].position === "GK" && badgesTeam[0].querySelector('.gk .position').innerText === "") {

            document.querySelector('.gk .position').innerText = locals[i].position;
            document.querySelector('.gk .ratingNum').innerText = locals[i].rating;
            
            document.querySelector('.gk .shooting').innerText = "SH";
            document.querySelector('.gk .shootingNum').innerText = locals[i].shooting;

            document.querySelector('.gk .pace').innerText = "PC";
            document.querySelector('.gk .paceNum').innerText = locals[i].pace;

            document.querySelector('.gk .passing').innerText = "PS";
            document.querySelector('.gk .passingNum').innerText = locals[i].passing;

            document.querySelector('.gk .dribbling').innerText = "DR";
            document.querySelector('.gk .dribblingNum').innerText = locals[i].dribbling;

            document.querySelector('.gk .defending').innerText = "DF";
            document.querySelector('.gk .defendingNum').innerText = locals[i].defending;

            document.querySelector('.gk .physical').innerText = "PH";
            document.querySelector('.gk .physicalNum').innerText = locals[i].physical;

            document.querySelector(".gk .players").setAttribute("src",locals[i].photo)
            document.querySelector(".gk .flags").setAttribute("src",locals[i].flag)
            document.querySelector(".gk .logo").setAttribute("src",locals[i].logo)

        } else if (locals[i].position === "LB" && badgesTeam[1].querySelector('.position').innerText === "") {

            document.querySelector('.lb .position').innerText = locals[i].position;
            document.querySelector('.lb .ratingNum').innerText = locals[i].rating;

            document.querySelector('.lb .shooting').innerText = "SH";
            document.querySelector('.lb .shootingNum').innerText = locals[i].shooting;

            document.querySelector('.lb .pace').innerText = "PC";
            document.querySelector('.lb .paceNum').innerText = locals[i].pace;

            document.querySelector('.lb .passing').innerText = "PS";
            document.querySelector('.lb .passingNum').innerText = locals[i].passing;

            document.querySelector('.lb .dribbling').innerText = "DR";
            document.querySelector('.lb .dribblingNum').innerText = locals[i].dribbling;

            document.querySelector('.lb .defending').innerText = "DF";
            document.querySelector('.lb .defendingNum').innerText = locals[i].defending;

            document.querySelector('.lb .physical').innerText = "PH";
            document.querySelector('.lb .physicalNum').innerText = locals[i].physical;

            document.querySelector(".lb .players").setAttribute("src",locals[i].photo)
            document.querySelector(".lb .flags").setAttribute("src",locals[i].flag)
            document.querySelector(".lb .logo").setAttribute("src",locals[i].logo)

        } else if (locals[i].position === "LCB" && badgesTeam[2].querySelector('.position').innerText === "") {
            document.querySelector('.lcb .position').innerText = locals[i].position;
            document.querySelector('.lcb .ratingNum').innerText = locals[i].rating;

                document.querySelector('.lcb .shooting').innerText = "SH";
            document.querySelector('.lcb .shootingNum').innerText = locals[i].shooting;

            document.querySelector('.lcb .pace').innerText = "PC";
            document.querySelector('.lcb .paceNum').innerText = locals[i].pace;

            document.querySelector('.lcb .passing').innerText = "PS";
            document.querySelector('.lcb .passingNum').innerText = locals[i].passing;

            document.querySelector('.lcb .dribbling').innerText = "DR";
            document.querySelector('.lcb .dribblingNum').innerText = locals[i].dribbling;

            document.querySelector('.lcb .defending').innerText = "DF";
            document.querySelector('.lcb .defendingNum').innerText = locals[i].defending;

            document.querySelector('.lcb .physical').innerText = "PH";
            document.querySelector('.lcb .physicalNum').innerText = locals[i].physical;

            document.querySelector(".lcb .players").setAttribute("src",locals[i].photo)
            document.querySelector(".lcb .flags").setAttribute("src",locals[i].flag)
            document.querySelector(".lcb .logo").setAttribute("src",locals[i].logo)

        } else if (locals[i].position === "RCB" && badgesTeam[3].querySelector('.rcb .position').innerText === "") {
            
            document.querySelector('.rcb .position').innerText = locals[i].position;
            document.querySelector('.rcb .ratingNum').innerText = locals[i].rating;

                document.querySelector('.rcb .shooting').innerText = "SH";
            document.querySelector('.rcb .shootingNum').innerText = locals[i].shooting;

            document.querySelector('.rcb .pace').innerText = "PC";
            document.querySelector('.rcb .paceNum').innerText = locals[i].pace;

            document.querySelector('.rcb .passing').innerText = "PS";
            document.querySelector('.rcb .passingNum').innerText = locals[i].passing;

            document.querySelector('.rcb .dribbling').innerText = "DR";
            document.querySelector('.rcb .dribblingNum').innerText = locals[i].dribbling;

            document.querySelector('.rcb .defending').innerText = "DF";
            document.querySelector('.rcb .defendingNum').innerText = locals[i].defending;

            document.querySelector('.rcb .physical').innerText = "PH";
            document.querySelector('.rcb .physicalNum').innerText = locals[i].physical;

            document.querySelector(".rcb .players").setAttribute("src",locals[i].photo)
            document.querySelector(".rcb .flags").setAttribute("src",locals[i].flag)
            document.querySelector(".rcb .logo").setAttribute("src",locals[i].logo)

        }else if (locals[i].position === "RB" && badgesTeam[4].querySelector('.rb .position').innerText === "") {
            
            document.querySelector('.rb .position').innerText = locals[i].position;
            document.querySelector('.rb .ratingNum').innerText = locals[i].rating;

            document.querySelector('.rb .shooting').innerText = "SH";
            document.querySelector('.rb .shootingNum').innerText = locals[i].shooting;

            document.querySelector('.rb .pace').innerText = "PC";
            document.querySelector('.rb .paceNum').innerText = locals[i].pace;

            document.querySelector('.rb .passing').innerText = "PS";
            document.querySelector('.rb .passingNum').innerText = locals[i].passing;

            document.querySelector('.rb .dribbling').innerText = "DR";
            document.querySelector('.rb .dribblingNum').innerText = locals[i].dribbling;

            document.querySelector('.rb .defending').innerText = "DF";
            document.querySelector('.rb .defendingNum').innerText = locals[i].defending;

            document.querySelector('.rb .physical').innerText = "PH";
            document.querySelector('.rb .physicalNum').innerText = locals[i].physical;

            document.querySelector(".rb .players").setAttribute("src",locals[i].photo)
            document.querySelector(".rb .flags").setAttribute("src",locals[i].flag)
            document.querySelector(".rb .logo").setAttribute("src",locals[i].logo)

        }else if (locals[i].position === "LCM" && badgesTeam[5].querySelector('.lcm .position').innerText === "") {
            
            document.querySelector('.lcm .position').innerText = locals[i].position;
            document.querySelector('.lcm .ratingNum').innerText = locals[i].rating;

                document.querySelector('.lcm .shooting').innerText = "SH";
            document.querySelector('.lcm .shootingNum').innerText = locals[i].shooting;

            document.querySelector('.lcm .pace').innerText = "PC";
            document.querySelector('.lcm .paceNum').innerText = locals[i].pace;

            document.querySelector('.lcm .passing').innerText = "PS";
            document.querySelector('.lcm .passingNum').innerText = locals[i].passing;

            document.querySelector('.lcm .dribbling').innerText = "DR";
            document.querySelector('.lcm .dribblingNum').innerText = locals[i].dribbling;

            document.querySelector('.lcm .defending').innerText = "DF";
            document.querySelector('.lcm .defendingNum').innerText = locals[i].defending;

            document.querySelector('.lcm .physical').innerText = "PH";
            document.querySelector('.lcm .physicalNum').innerText = locals[i].physical;

            document.querySelector(".lcm .players").setAttribute("src",locals[i].photo)
            document.querySelector(".lcm .flags").setAttribute("src",locals[i].flag)
            document.querySelector(".lcm .logo").setAttribute("src",locals[i].logo)
        
        }else if (locals[i].position === "RCM" && badgesTeam[6].querySelector('.rcm .position').innerText === "") {
            
            document.querySelector('.rcm .position').innerText = locals[i].position;
            document.querySelector('.rcm .ratingNum').innerText = locals[i].rating;

                document.querySelector('.rcm .shooting').innerText = "SH";
            document.querySelector('.rcm .shootingNum').innerText = locals[i].shooting;

            document.querySelector('.rcm .pace').innerText = "PC";
            document.querySelector('.rcm .paceNum').innerText = locals[i].pace;

            document.querySelector('.rcm .passing').innerText = "PS";
            document.querySelector('.rcm .passingNum').innerText = locals[i].passing;

            document.querySelector('.rcm .dribbling').innerText = "DR";
            document.querySelector('.rcm .dribblingNum').innerText = locals[i].dribbling;

            document.querySelector('.rcm .defending').innerText = "DF";
            document.querySelector('.rcm .defendingNum').innerText = locals[i].defending;

            document.querySelector('.rcm .physical').innerText = "PH";
            document.querySelector('.rcm .physicalNum').innerText = locals[i].physical;

            document.querySelector(".rcm .players").setAttribute("src",locals[i].photo)
            document.querySelector(".rcm .flags").setAttribute("src",locals[i].flag)
            document.querySelector(".rcm .logo").setAttribute("src",locals[i].logo)
        
        }else if (locals[i].position === "CM" && badgesTeam[7].querySelector('.cm .position').innerText === "") {
            
            document.querySelector('.cm .position').innerText = locals[i].position;
            document.querySelector('.cm .ratingNum').innerText = locals[i].rating;

            document.querySelector('.cm .shooting').innerText = "SH";
            document.querySelector('.cm .shootingNum').innerText = locals[i].shooting;

            document.querySelector('.cm .pace').innerText = "PC";
            document.querySelector('.cm .paceNum').innerText = locals[i].pace;

            document.querySelector('.cm .passing').innerText = "PS";
            document.querySelector('.cm .passingNum').innerText = locals[i].passing;

            document.querySelector('.cm .dribbling').innerText = "DR";
            document.querySelector('.cm .dribblingNum').innerText = locals[i].dribbling;

            document.querySelector('.cm .defending').innerText = "DF";
            document.querySelector('.cm .defendingNum').innerText = locals[i].defending;

            document.querySelector('.cm .physical').innerText = "PH";
            document.querySelector('.cm .physicalNum').innerText = locals[i].physical;

            document.querySelector(".cm .players").setAttribute("src",locals[i].photo)
            document.querySelector(".cm .flags").setAttribute("src",locals[i].flag)
            document.querySelector(".cm .logo").setAttribute("src",locals[i].logo)
        
        }else if (locals[i].position === "RF" && badgesTeam[8].querySelector('.rf .position').innerText === "") {
            
            document.querySelector('.rf .position').innerText = locals[i].position;
            document.querySelector('.rf .ratingNum').innerText = locals[i].rating;

            document.querySelector('.rf .shooting').innerText = "SH";
            document.querySelector('.rf .shootingNum').innerText = locals[i].shooting;

            document.querySelector('.rf .pace').innerText = "PC";
            document.querySelector('.rf .paceNum').innerText = locals[i].pace;

            document.querySelector('.rf .passing').innerText = "PS";
            document.querySelector('.rf .passingNum').innerText = locals[i].passing;

            document.querySelector('.rf .dribbling').innerText = "DR";
            document.querySelector('.rf .dribblingNum').innerText = locals[i].dribbling;

            document.querySelector('.rf .defending').innerText = "DF";
            document.querySelector('.rf .defendingNum').innerText = locals[i].defending;

            document.querySelector('.rf .physical').innerText = "PH";
            document.querySelector('.rf .physicalNum').innerText = locals[i].physical;

            document.querySelector(".rf .players").setAttribute("src",locals[i].photo)
            document.querySelector(".rf .flags").setAttribute("src",locals[i].flag)
            document.querySelector(".rf .logo").setAttribute("src",locals[i].logo)
        
        }else if (locals[i].position === "LW" && badgesTeam[9].querySelector('.lw .position').innerText === "") {
            
            document.querySelector('.lw .position').innerText = locals[i].position;
            document.querySelector('.lw .ratingNum').innerText = locals[i].rating;

            document.querySelector('.lw .shooting').innerText = "SH";
            document.querySelector('.lw .shootingNum').innerText = locals[i].shooting;

            document.querySelector('.lw .pace').innerText = "PC";
            document.querySelector('.lw .paceNum').innerText = locals[i].pace;

            document.querySelector('.lw .passing').innerText = "PS";
            document.querySelector('.lw .passingNum').innerText = locals[i].passing;

            document.querySelector('.lw .dribbling').innerText = "DR";
            document.querySelector('.lw .dribblingNum').innerText = locals[i].dribbling;

            document.querySelector('.lw .defending').innerText = "DF";
            document.querySelector('.lw .defendingNum').innerText = locals[i].defending;

            document.querySelector('.lw .physical').innerText = "PH";
            document.querySelector('.lw .physicalNum').innerText = locals[i].physical;
            document.querySelector(".lw .players").setAttribute("src",locals[i].photo)
            document.querySelector(".lw .flags").setAttribute("src",locals[i].flag)
            document.querySelector(".lw .logo").setAttribute("src",locals[i].logo)
        
        }else if (locals[i].position === "ST" && badgesTeam[10].querySelector('.st .position').innerText === "") {
            
            document.querySelector('.st .position').innerText = locals[i].position;
            document.querySelector('.st .ratingNum').innerText = locals[i].rating;

            document.querySelector('.st .shooting').innerText = "SH";
            document.querySelector('.st .shootingNum').innerText = locals[i].shooting;

            document.querySelector('.st .pace').innerText = "PC";
            document.querySelector('.st .paceNum').innerText = locals[i].pace;

            document.querySelector('.st .passing').innerText = "PS";
            document.querySelector('.st .passingNum').innerText = locals[i].passing;

            document.querySelector('.st .dribbling').innerText = "DR";
            document.querySelector('.st .dribblingNum').innerText = locals[i].dribbling;

            document.querySelector('.st .defending').innerText = "DF";
            document.querySelector('.st .defendingNum').innerText = locals[i].defending;

            document.querySelector('.st .physical').innerText = "PH";
            document.querySelector('.st .physicalNum').innerText = locals[i].physical;

            document.querySelector(".st .players").setAttribute("src",locals[i].photo)
            document.querySelector(".st .flags").setAttribute("src",locals[i].flag)
            document.querySelector(".st .logo").setAttribute("src",locals[i].logo)
        
        }        // document.querySelector('#player').setAttribute("src", local.photo)
        // badge.querySelector('img').setAttribute("src", local.photo)
        // badge.querySelector('img').setAttribute("src", local.photo)
        // badge.querySelector('img').setAttribute("src", local.photo)
    }
    // })

}
// window.onload(afficherJoueurs())selectElement.addEventListener("change", handleSelectChange);