const inputs = document.querySelectorAll('.inputs');

const selectElement = document.getElementById("position");
let listPlayers = []
let arrayInputs = Array.from(inputs);
console.log(arrayInputs[5].id);
// document.querySelector('form').addEventListener('click', (e)=>{
//     e.preventDefault()
//     console.log(e);s
// })
function add() {
    
    let values = {};
    arrayInputs.forEach((input) => {
        values[input.name] = input.value;
    })
    listPlayers.push(values)

    arrayInputs.forEach(input => {
        input.value = ""
    })
    localStorage.setItem("players", JSON.stringify(listPlayers))

    inputs.forEach(input => {
        const value = input.value;
        const type = input.name;

        switch (type) {
            case 'name':
                if (!validateEmail(value)) {
                    input.setCustomValidity('Adresse e-mail invalide');
                } else {
                    updateUserEmail(value);
                }
                break;
            case 'number':
                if (!validateNumber(value)) {
                    input.setCustomValidity('Valeur numérique invalide');
                } else {
                    updateUserNumber(value);
                }
                break;
            // ...
        }
    });

    function validateName(name) {

    }

    function validateNumber(number) {

    }

    function updateUserEmail(email) {
        
    }

    function updateUserNumber(number) {

    }
    // document.querySelector("span").innerHTML = ''

    // if (input.value === "") {
    //     document.querySelector("span").innerHTML += 'chomp obligatoir';
    // }
    // else {
    //     document.querySelector("span").innerHTML = '';
    // }
// })
}

function handleSelectChange() {
    document.querySelector(".formation").innerHTML = "";
    if (selectElement.value == "Goal Keeper (GK)") {
        document.querySelector(".formation").innerHTML += `
        <div>
            <label for="rating">Rating</label>
            <input type="number" id="rating" name="rating" min="1" max="99" class="inputs"
            placeholder="player rating">
        </div>
        <div>
            <label for="diving">diving</label>
            <input type="number" id="diving" name="diving" min="1" max="100" placeholder="diving" class="inputs">
        </div>
        <div>
            <label for="handling">handling</label>
            <input type="number" id="handling" name="handling" min="1" max="99" class="inputs"
                placeholder="handling">
        </div>
        <div>
            <label for="kicking">kicking</label>
            <input type="number" id="kicking" name="kicking" min="1" max="99" class="inputs"
                placeholder="kicking">
        </div>
        <div>
            <label for="reflexes">reflexes</label>
            <input type="number" id="reflexes" name="reflexes" min="1" max="99" class="inputs"
                placeholder="reflexes">
        </div>
        <div>
            <label for="speed">speed</label>
            <input type="number" id="speed" name="speed" min="1" max="99" class="inputs"
            placeholder="speed">
        </div>
        <div>
            <label for="positioning">positioning</label>
            <input type="number" id="positioning" name="positioning" min="1" max="99" class="inputs"
            placeholder="positioning">
        </div>
    `;
    } else {
        document.querySelector(".formation").innerHTML += `
        <div>
            <label for="rating">Rating</label>
            <input type="number" id="rating" name="rating" min="1" max="99" class="inputs"
            placeholder="player rating">
        </div>
        <div>
            <label for="pace">pace</label>
            <input type="number" id="pace" name="pace" min="1" max="100" placeholder="player pace" class="inputs">
        </div>
        <div>
            <label for="shooting">shooting</label>
            <input type="number" id="shooting" name="shooting" min="1" max="99" class="inputs"
                placeholder="player shooting">
        </div>
        <div>
            <label for="passing">passing</label>
            <input type="number" id="passing" name="passing" min="1" max="99" class="inputs"
                placeholder="player passing">
        </div>
        <div>
            <label for="dribbling">dribbling</label>
            <input type="number" id="dribbling" name="dribbling" min="1" max="99" class="inputs"
                placeholder="player dribbling">
        </div>
        <div>
            <label for="defending">defending</label>
            <input type="number" id="defending" name="defending" min="1" max="99" class="inputs"
            placeholder="player defending">
        </div>
        <div>
            <label for="physical">physical</label>
            <input type="number" id="physical" name="physical" min="1" max="99" class="inputs"
            placeholder="player physical">
        </div>
    `
    }
}





selectElement.addEventListener("change", handleSelectChange);

